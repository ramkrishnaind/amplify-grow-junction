/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDemoSkillsList = /* GraphQL */ `
  query GetDemoSkillsList($id: ID!) {
    getDemoSkillsList(id: $id) {
      id
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
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMentorWeekSchedule = /* GraphQL */ `
  query GetMentorWeekSchedule($id: ID!) {
    getMentorWeekSchedule(id: $id) {
      day
      checked
      time_schedule {
        startTime
        startTimeMeridian
        endTime
        endTimeMeridian
        leftMeridianDropDown
        rightMeridianDropDown
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listMentorWeekSchedules = /* GraphQL */ `
  query ListMentorWeekSchedules(
    $filter: ModelMentorWeekScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentorWeekSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        day
        checked
        time_schedule {
          startTime
          startTimeMeridian
          endTime
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimeSchedule = /* GraphQL */ `
  query GetTimeSchedule($id: ID!) {
    getTimeSchedule(id: $id) {
      startTime
      startTimeMeridian
      endTime
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTimeSchedules = /* GraphQL */ `
  query ListTimeSchedules(
    $filter: ModelTimeScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        startTime
        startTimeMeridian
        endTime
        endTimeMeridian
        leftMeridianDropDown
        rightMeridianDropDown
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
      username
      description
      createdAt
      updatedAt
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
        username
        description
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
      student_id
      student_name
      domain_id {
        id
        value
        createdAt
        updatedAt
      }
      recent_college
      degree
      education {
        degree
      }
      current_employee
      your_role
      experience
      phone_number
      id
      createdAt
      updatedAt
      username
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
        student_id
        student_name
        domain_id {
          id
          value
          createdAt
          updatedAt
        }
        recent_college
        degree
        education {
          degree
        }
        current_employee
        your_role
        experience
        phone_number
        id
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const getMentorRegister = /* GraphQL */ `
  query GetMentorRegister($id: ID!) {
    getMentorRegister(id: $id) {
      mentor_id
      mentor_name
      domain_id {
        id
        value
        createdAt
        updatedAt
      }
      profile_url
      mentor_service_id {
        id
        value
        createdAt
        updatedAt
      }
      mentor_availability_id
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
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
        mentor_id
        mentor_name
        domain_id {
          id
          value
          createdAt
          updatedAt
        }
        profile_url
        mentor_service_id {
          id
          value
          createdAt
          updatedAt
        }
        mentor_availability_id
        phone_number
        id
        createdAt
        updatedAt
        username
        owner
      }
      nextToken
    }
  }
`;
export const getMentorAvailability = /* GraphQL */ `
  query GetMentorAvailability($id: ID!) {
    getMentorAvailability(id: $id) {
      mentor_availability_id
      mentor_schedule {
        day
        checked
        time_schedule {
          startTime
          startTimeMeridian
          endTime
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const listMentorAvailabilities = /* GraphQL */ `
  query ListMentorAvailabilities(
    $filter: ModelMentorAvailabilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentorAvailabilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        mentor_availability_id
        mentor_schedule {
          day
          checked
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        username
        owner
      }
      nextToken
    }
  }
`;
