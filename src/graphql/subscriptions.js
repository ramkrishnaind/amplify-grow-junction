/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $username: String
  ) {
    onCreateTodo(filter: $filter, username: $username) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $username: String
  ) {
    onUpdateTodo(filter: $filter, username: $username) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $username: String
  ) {
    onDeleteTodo(filter: $filter, username: $username) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDemoSkillsList = /* GraphQL */ `
  subscription OnCreateDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
    $username: String
  ) {
    onCreateDemoSkillsList(filter: $filter, username: $username) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const onUpdateDemoSkillsList = /* GraphQL */ `
  subscription OnUpdateDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
    $username: String
  ) {
    onUpdateDemoSkillsList(filter: $filter, username: $username) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const onDeleteDemoSkillsList = /* GraphQL */ `
  subscription OnDeleteDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
    $username: String
  ) {
    onDeleteDemoSkillsList(filter: $filter, username: $username) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const onCreateSuggestedServiceList = /* GraphQL */ `
  subscription OnCreateSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
    $username: String
  ) {
    onCreateSuggestedServiceList(filter: $filter, username: $username) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const onUpdateSuggestedServiceList = /* GraphQL */ `
  subscription OnUpdateSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
    $username: String
  ) {
    onUpdateSuggestedServiceList(filter: $filter, username: $username) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const onDeleteSuggestedServiceList = /* GraphQL */ `
  subscription OnDeleteSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
    $username: String
  ) {
    onDeleteSuggestedServiceList(filter: $filter, username: $username) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const onCreateStudentRegister = /* GraphQL */ `
  subscription OnCreateStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onCreateStudentRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      student_id
      student_name
      domain_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      recent_college
      degree
      current_employee
      your_role
      experience
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onUpdateStudentRegister = /* GraphQL */ `
  subscription OnUpdateStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateStudentRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      student_id
      student_name
      domain_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      recent_college
      degree
      current_employee
      your_role
      experience
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onDeleteStudentRegister = /* GraphQL */ `
  subscription OnDeleteStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteStudentRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      student_id
      student_name
      domain_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      recent_college
      degree
      current_employee
      your_role
      experience
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onCreateMentorRegister = /* GraphQL */ `
  subscription OnCreateMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onCreateMentorRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_id
      mentor_name
      domain_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      profile_url
      mentor_service_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onUpdateMentorRegister = /* GraphQL */ `
  subscription OnUpdateMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateMentorRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_id
      mentor_name
      domain_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      profile_url
      mentor_service_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onDeleteMentorRegister = /* GraphQL */ `
  subscription OnDeleteMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteMentorRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_id
      mentor_name
      domain_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      profile_url
      mentor_service_id {
        id
        value
        createdAt
        updatedAt
        username
      }
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
