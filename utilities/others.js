import { S3Client as original } from '@aws-sdk/client-s3'
import { store } from '../redux/store'
// import { GetObjectCommand } from '@aws-sdk/client-s3'
import { API, graphqlOperation } from 'aws-amplify'
import { getLoggedinUserEmail } from './user'
import { listUserInfos } from '../src/graphql/queries'
import {
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'
// import { v4 as uuid } from 'uuid'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
export const sluggify = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

// Set the AWS Region.
// const REGION = "REGION"; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
export const s3Client = new original({
  region: 'us-east-1',
  credentials: {
    secretAccessKey: process.env.NEXT_PUBLIC_SECRETACCESSKEY,
    accessKeyId: process.env.NEXT_PUBLIC_ACCESSKEYID,
  },
})
export const getS3ImageUrl = async (image_name) => {
  // debugger
  try {
    const command = new GetObjectCommand({
      Bucket: 'testamplifyapia8dcbc927f9c443b9c1dbfaa11180a7c90108-dev', // The name of the bucket. For example, 'sample_bucket_101'.
      Key: `public/${image_name}`,
    })
    try {
      const img = await s3Client.send(command)
    } catch (error) {
      console.log()
    }

    const url = await getSignedUrl(s3Client, command, {
      expiresIn: 15 * 60,
    }) // expires in seconds
    // console.log('Presigned URL: ', url)
    // const img = await Storage.get(data.profile_image)
    // const response = await fetch(img)
    // const arrBuf = await response.arrayBuffer()
    // const base64String = arrayBufferToBase64(arrBuf)
    // data.profile_image = `data:image/png;base64,${base64String}`
    // data.profile_image_url = `https://testamplifyapia8dcbc927f9c443b9c1dbfaa11180a7c90108-dev.s3.us-east-1.amazonaws.com/public/${data.profile_image}`
    return url
  } catch (error) {
    return ''
  }
}
export const setS3ImageUrl = async (
  image_name,
  file,
  previous_image_name = '',
) => {
  debugger
  if (previous_image_name) {
    try {
      await s3Client.send(
        new DeleteObjectCommand({
          Bucket: 'testamplifyapia8dcbc927f9c443b9c1dbfaa11180a7c90108-dev', // The name of the bucket. For example, 'sample_bucket_101'.
          Key: `public/${previous_image_name}`,
        }),
      )
    } catch (error) {
      debugger
      console.log(error)
    }
  }
  const ext = image_name.substr(image_name.lastIndexOf('.') + 1)
  const params = {
    ContentType: `image/${ext}`,
    Bucket: 'testamplifyapia8dcbc927f9c443b9c1dbfaa11180a7c90108-dev', // The name of the bucket. For example, 'sample_bucket_101'.
    Key: `public/${image_name}`,
    Body: file,
  }
  try {
    await s3Client.send(new PutObjectCommand(params))
  } catch (err) {
    console.log('Error', err)
  }
}
export const checkUserKyc = async () => {
  const authReducer = store.getState().AuthReducer
  const username = getLoggedinUserEmail()
  if (!username) {
    window.location.replace('/auth/Login')
  } else {
    const results = await API.graphql(
      graphqlOperation(listUserInfos, {
        filter: {
          username: {
            eq: username,
          },
        },
      }),
    )
    if (results.data.listUserInfos?.items?.length > 0) {
      const data = { ...results.data.listUserInfos?.items[0] }
      if (data.kyc_done) {
        // debugger
        window.location.replace(
          `${authReducer.registerType === 'MENTOR' ? '/mentor' : '/student'}`,
        )
      }
    } else {
      window.location.replace('/auth/Login')
    }
  }
}
