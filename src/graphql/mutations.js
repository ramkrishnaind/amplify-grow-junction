/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const createDemoSkillsList = /* GraphQL */ `
  mutation CreateDemoSkillsList(
    $input: CreateDemoSkillsListInput!
    $condition: ModelDemoSkillsListConditionInput
  ) {
    createDemoSkillsList(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const updateDemoSkillsList = /* GraphQL */ `
  mutation UpdateDemoSkillsList(
    $input: UpdateDemoSkillsListInput!
    $condition: ModelDemoSkillsListConditionInput
  ) {
    updateDemoSkillsList(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const deleteDemoSkillsList = /* GraphQL */ `
  mutation DeleteDemoSkillsList(
    $input: DeleteDemoSkillsListInput!
    $condition: ModelDemoSkillsListConditionInput
  ) {
    deleteDemoSkillsList(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const createSuggestedServiceList = /* GraphQL */ `
  mutation CreateSuggestedServiceList(
    $input: CreateSuggestedServiceListInput!
    $condition: ModelSuggestedServiceListConditionInput
  ) {
    createSuggestedServiceList(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const updateSuggestedServiceList = /* GraphQL */ `
  mutation UpdateSuggestedServiceList(
    $input: UpdateSuggestedServiceListInput!
    $condition: ModelSuggestedServiceListConditionInput
  ) {
    updateSuggestedServiceList(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const deleteSuggestedServiceList = /* GraphQL */ `
  mutation DeleteSuggestedServiceList(
    $input: DeleteSuggestedServiceListInput!
    $condition: ModelSuggestedServiceListConditionInput
  ) {
    deleteSuggestedServiceList(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      username
    }
  }
`;
export const createStudentRegister = /* GraphQL */ `
  mutation CreateStudentRegister(
    $input: CreateStudentRegisterInput!
    $condition: ModelStudentRegisterConditionInput
  ) {
    createStudentRegister(input: $input, condition: $condition) {
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
export const updateStudentRegister = /* GraphQL */ `
  mutation UpdateStudentRegister(
    $input: UpdateStudentRegisterInput!
    $condition: ModelStudentRegisterConditionInput
  ) {
    updateStudentRegister(input: $input, condition: $condition) {
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
export const deleteStudentRegister = /* GraphQL */ `
  mutation DeleteStudentRegister(
    $input: DeleteStudentRegisterInput!
    $condition: ModelStudentRegisterConditionInput
  ) {
    deleteStudentRegister(input: $input, condition: $condition) {
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
export const createMentorRegister = /* GraphQL */ `
  mutation CreateMentorRegister(
    $input: CreateMentorRegisterInput!
    $condition: ModelMentorRegisterConditionInput
  ) {
    createMentorRegister(input: $input, condition: $condition) {
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
export const updateMentorRegister = /* GraphQL */ `
  mutation UpdateMentorRegister(
    $input: UpdateMentorRegisterInput!
    $condition: ModelMentorRegisterConditionInput
  ) {
    updateMentorRegister(input: $input, condition: $condition) {
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
export const deleteMentorRegister = /* GraphQL */ `
  mutation DeleteMentorRegister(
    $input: DeleteMentorRegisterInput!
    $condition: ModelMentorRegisterConditionInput
  ) {
    deleteMentorRegister(input: $input, condition: $condition) {
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
