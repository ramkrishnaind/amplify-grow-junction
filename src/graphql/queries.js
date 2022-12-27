/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDemoSkillsList = /* GraphQL */ `
  query GetDemoSkillsList($id: ID!) {
    getDemoSkillsList(id: $id) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const listDemoSkillsLists = /* GraphQL */ `
  query ListDemoSkillsLists(
    $filter: ModelDemoSkillsListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDemoSkillsLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDomainInterestedList = /* GraphQL */ `
  query GetDomainInterestedList($id: ID!) {
    getDomainInterestedList(id: $id) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const listDomainInterestedLists = /* GraphQL */ `
  query ListDomainInterestedLists(
    $filter: ModelDomainInterestedListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDomainInterestedLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSuggestedServiceList = /* GraphQL */ `
  query GetSuggestedServiceList($id: ID!) {
    getSuggestedServiceList(id: $id) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const listSuggestedServiceLists = /* GraphQL */ `
  query ListSuggestedServiceLists(
    $filter: ModelSuggestedServiceListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestedServiceLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentRegister = /* GraphQL */ `
  query GetStudentRegister($id: ID!) {
    getStudentRegister(id: $id) {
      about_yourself {
        grow_junction_url
        first_name
        last_name
        short_description
        about_yourself
      }
      username
      social {
        linkedin_url
        facebook_url
        instagram_url
        personal_web_url
        other_url
      }
      contact_info {
        email
        mobile
        whatsapp
      }
      education {
        degree
        college_university
        course
        graduation_year
      }
      professional_info {
        occupation
        organization
        location
        position
        experience {
          years
          months
        }
      }
      profile_image
      student_profile
      whatsapp_number
      interestedSkills {
        id
        username
        value
        createdAt
        updatedAt
      }
      linkedIn_url
      id
      createdAt
      updatedAt
    }
  }
`;
export const listStudentRegisters = /* GraphQL */ `
  query ListStudentRegisters(
    $filter: ModelStudentRegisterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentRegisters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        about_yourself {
          grow_junction_url
          first_name
          last_name
          short_description
          about_yourself
        }
        username
        social {
          linkedin_url
          facebook_url
          instagram_url
          personal_web_url
          other_url
        }
        contact_info {
          email
          mobile
          whatsapp
        }
        education {
          degree
          college_university
          course
          graduation_year
        }
        professional_info {
          occupation
          organization
          location
          position
          experience {
            years
            months
          }
        }
        profile_image
        student_profile
        whatsapp_number
        interestedSkills {
          id
          username
          value
          createdAt
          updatedAt
        }
        linkedIn_url
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOneOnOne = /* GraphQL */ `
  query GetOneOnOne($id: ID!) {
    getOneOnOne(id: $id) {
      sessionTitle
      username
      listedPrice
      finalPrice
      numberOfSessions
      sessionDuration
      sessionDurationIn
      description
      questions {
        id
        text
        type
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listOneOnOnes = /* GraphQL */ `
  query ListOneOnOnes(
    $filter: ModelOneOnOneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOneOnOnes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        sessionTitle
        username
        listedPrice
        finalPrice
        numberOfSessions
        sessionDuration
        sessionDurationIn
        description
        questions {
          id
          text
          type
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTextQuery = /* GraphQL */ `
  query GetTextQuery($id: ID!) {
    getTextQuery(id: $id) {
      title
      username
      description
      responseTime
      responseTimeIn
      listedPrice
      finalPrice
      questions {
        id
        text
        type
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTextQueries = /* GraphQL */ `
  query ListTextQueries(
    $filter: ModelTextQueryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTextQueries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        username
        description
        responseTime
        responseTimeIn
        listedPrice
        finalPrice
        questions {
          id
          text
          type
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkshop = /* GraphQL */ `
  query GetWorkshop($id: ID!) {
    getWorkshop(id: $id) {
      title
      username
      description
      callDuration
      callDurationIn
      listedPrice
      finalPrice
      workshopDate
      workshopTime
      workshopImage
      hideService
      limitedParticipants
      audienceSize
      questions {
        id
        text
        type
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listWorkshops = /* GraphQL */ `
  query ListWorkshops(
    $filter: ModelWorkshopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkshops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        username
        description
        callDuration
        callDurationIn
        listedPrice
        finalPrice
        workshopDate
        workshopTime
        workshopImage
        hideService
        limitedParticipants
        audienceSize
        questions {
          id
          text
          type
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourses = /* GraphQL */ `
  query GetCourses($id: ID!) {
    getCourses(id: $id) {
      courseTitle
      username
      description
      numberOfSessions
      sessionDuration
      sessionDurationIn
      listedPrice
      finalPrice
      courseDate
      courseTime
      hideService
      limitParticipants
      audienceSize
      courseImage
      sessions {
        id
        text
        sessionDate
        sessionTime
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        courseTitle
        username
        description
        numberOfSessions
        sessionDuration
        sessionDurationIn
        listedPrice
        finalPrice
        courseDate
        courseTime
        hideService
        limitParticipants
        audienceSize
        courseImage
        sessions {
          id
          text
          sessionDate
          sessionTime
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPackages = /* GraphQL */ `
  query GetPackages($id: ID!) {
    getPackages(id: $id) {
      packageTitle
      username
      description
      listedPrice
      finalPrice
      packageImage
      emailContent
      uploadFile
      hideService
      limitParticipants
      audienceSize
      packageServices {
        id
        text
        title
        duration
        price
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listPackages = /* GraphQL */ `
  query ListPackages(
    $filter: ModelPackagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        packageTitle
        username
        description
        listedPrice
        finalPrice
        packageImage
        emailContent
        uploadFile
        hideService
        limitParticipants
        audienceSize
        packageServices {
          id
          text
          title
          duration
          price
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMentorRegister = /* GraphQL */ `
  query GetMentorRegister($id: ID!) {
    getMentorRegister(id: $id) {
      about_yourself {
        grow_junction_url
        first_name
        last_name
        short_description
        about_yourself
      }
      username
      social {
        linkedin_url
        facebook_url
        instagram_url
        personal_web_url
        other_url
      }
      currency
      time_zone
      contact_info {
        email
        mobile
        whatsapp
      }
      education {
        degree
        college_university
        course
        graduation_year
      }
      professional_info {
        occupation
        organization
        location
        position
        experience {
          years
          months
        }
      }
      profile_image
      domain_id
      whatsapp_number
      url
      mentor_service_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const listMentorRegisters = /* GraphQL */ `
  query ListMentorRegisters(
    $filter: ModelMentorRegisterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentorRegisters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        about_yourself {
          grow_junction_url
          first_name
          last_name
          short_description
          about_yourself
        }
        username
        social {
          linkedin_url
          facebook_url
          instagram_url
          personal_web_url
          other_url
        }
        currency
        time_zone
        contact_info {
          email
          mobile
          whatsapp
        }
        education {
          degree
          college_university
          course
          graduation_year
        }
        professional_info {
          occupation
          organization
          location
          position
          experience {
            years
            months
          }
        }
        profile_image
        domain_id
        whatsapp_number
        url
        mentor_service_id
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
      availableSameTime
      daySchedules {
        everyday {
          everyday
          time {
            startTime
            endTime
          }
        }
        Sunday {
          Sunday
          time {
            startTime
            endTime
          }
        }
        Monday {
          Monday
          time {
            startTime
            endTime
          }
        }
        Tuesday {
          Tuesday
          time {
            startTime
            endTime
          }
        }
        Wednesday {
          Wednesday
          time {
            startTime
            endTime
          }
        }
        Thursday {
          Thursday
          time {
            startTime
            endTime
          }
        }
        Friday {
          Friday
          time {
            startTime
            endTime
          }
        }
        Saturday {
          Saturday
          time {
            startTime
            endTime
          }
        }
      }
      username
      unavailableDates
      id
      createdAt
      updatedAt
    }
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        availableSameTime
        daySchedules {
          everyday {
            everyday
            time {
              startTime
              endTime
            }
          }
          Sunday {
            Sunday
            time {
              startTime
              endTime
            }
          }
          Monday {
            Monday
            time {
              startTime
              endTime
            }
          }
          Tuesday {
            Tuesday
            time {
              startTime
              endTime
            }
          }
          Wednesday {
            Wednesday
            time {
              startTime
              endTime
            }
          }
          Thursday {
            Thursday
            time {
              startTime
              endTime
            }
          }
          Friday {
            Friday
            time {
              startTime
              endTime
            }
          }
          Saturday {
            Saturday
            time {
              startTime
              endTime
            }
          }
        }
        username
        unavailableDates
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
      kyc_done
      register_type
      username
      email
      name
      profile_image
      id
      createdAt
      updatedAt
    }
  }
`;
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        kyc_done
        register_type
        username
        email
        name
        profile_image
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConfigurations = /* GraphQL */ `
  query GetConfigurations($id: ID!) {
    getConfigurations(id: $id) {
      timezone
      calender
      username
      personalMeetingLink
      bookingPeriod
      bookingPeriodIn
      noticePeriod
      noticePeriodIn
      id
      createdAt
      updatedAt
    }
  }
`;
export const listConfigurations = /* GraphQL */ `
  query ListConfigurations(
    $filter: ModelConfigurationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigurations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        timezone
        calender
        username
        personalMeetingLink
        bookingPeriod
        bookingPeriodIn
        noticePeriod
        noticePeriodIn
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      username
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
