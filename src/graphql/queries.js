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
      domain_id
      recent_college
      degree
      current_employee
      your_role
      experience
      phone_number
      linkedIn_url
      id
      createdAt
      updatedAt
      username
      owner
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
        domain_id
        recent_college
        degree
        current_employee
        your_role
        experience
        phone_number
        linkedIn_url
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
export const getMentorRegister = /* GraphQL */ `
  query GetMentorRegister($id: ID!) {
    getMentorRegister(id: $id) {
      mentor_id
      mentor_name
      domain_id
      linkedIn_url
      mentor_service_id
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
        domain_id
        linkedIn_url
        mentor_service_id
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
