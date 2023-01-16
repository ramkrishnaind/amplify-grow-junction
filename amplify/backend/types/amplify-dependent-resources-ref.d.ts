export type AmplifyDependentResourcesAttributes = {
    "api": {
        "getCashfreeSessionId": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "testamplifyapi": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "testamplifyapi362703db": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "HostedUIDomain": "string",
            "OAuthMetadata": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "createOrder": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "storage": {
        "testAmplify": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}