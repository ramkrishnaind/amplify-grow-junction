/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    }
  }
`;
export const createMentorWeekSchedule = /* GraphQL */ `
  mutation CreateMentorWeekSchedule(
    $input: CreateMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    createMentorWeekSchedule(input: $input, condition: $condition) {
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
export const updateMentorWeekSchedule = /* GraphQL */ `
  mutation UpdateMentorWeekSchedule(
    $input: UpdateMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    updateMentorWeekSchedule(input: $input, condition: $condition) {
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
export const deleteMentorWeekSchedule = /* GraphQL */ `
  mutation DeleteMentorWeekSchedule(
    $input: DeleteMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    deleteMentorWeekSchedule(input: $input, condition: $condition) {
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
export const createTimeSchedule = /* GraphQL */ `
  mutation CreateTimeSchedule(
    $input: CreateTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    createTimeSchedule(input: $input, condition: $condition) {
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
export const updateTimeSchedule = /* GraphQL */ `
  mutation UpdateTimeSchedule(
    $input: UpdateTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    updateTimeSchedule(input: $input, condition: $condition) {
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
export const deleteTimeSchedule = /* GraphQL */ `
  mutation DeleteTimeSchedule(
    $input: DeleteTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    deleteTimeSchedule(input: $input, condition: $condition) {
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
      }
      recent_college
      degree
      current_employee
      your_role
      experience
      phone_number
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
      id
      createdAt
      updatedAt
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
      }
      recent_college
      degree
      current_employee
      your_role
      experience
      phone_number
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
      id
      createdAt
      updatedAt
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
      }
      recent_college
      degree
      current_employee
      your_role
      experience
      phone_number
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
      id
      createdAt
      updatedAt
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
      id
      createdAt
      updatedAt
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
      id
      createdAt
      updatedAt
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
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMentorAvailability = /* GraphQL */ `
  mutation CreateMentorAvailability(
    $input: CreateMentorAvailabilityInput!
    $condition: ModelMentorAvailabilityConditionInput
  ) {
    createMentorAvailability(input: $input, condition: $condition) {
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
export const updateMentorAvailability = /* GraphQL */ `
  mutation UpdateMentorAvailability(
    $input: UpdateMentorAvailabilityInput!
    $condition: ModelMentorAvailabilityConditionInput
  ) {
    updateMentorAvailability(input: $input, condition: $condition) {
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
export const deleteMentorAvailability = /* GraphQL */ `
  mutation DeleteMentorAvailability(
    $input: DeleteMentorAvailabilityInput!
    $condition: ModelMentorAvailabilityConditionInput
  ) {
    deleteMentorAvailability(input: $input, condition: $condition) {
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
