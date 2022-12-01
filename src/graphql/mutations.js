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
export const createDomainInterestedList = /* GraphQL */ `
  mutation CreateDomainInterestedList(
    $input: CreateDomainInterestedListInput!
    $condition: ModelDomainInterestedListConditionInput
  ) {
    createDomainInterestedList(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateDomainInterestedList = /* GraphQL */ `
  mutation UpdateDomainInterestedList(
    $input: UpdateDomainInterestedListInput!
    $condition: ModelDomainInterestedListConditionInput
  ) {
    updateDomainInterestedList(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteDomainInterestedList = /* GraphQL */ `
  mutation DeleteDomainInterestedList(
    $input: DeleteDomainInterestedListInput!
    $condition: ModelDomainInterestedListConditionInput
  ) {
    deleteDomainInterestedList(input: $input, condition: $condition) {
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
      interestedSkills
      recent_college
      degree
      education {
        degree
      }
      current_employee
      your_role
      experience
      phone_number
      linkedIn_url
      id
      createdAt
      updatedAt
      username
    }
  }
`;
export const updateStudentRegister = /* GraphQL */ `
  mutation UpdateStudentRegister(
    $input: UpdateStudentRegisterInput!
    $condition: ModelStudentRegisterConditionInput
  ) {
    updateStudentRegister(input: $input, condition: $condition) {
      interestedSkills
      recent_college
      degree
      education {
        degree
      }
      current_employee
      your_role
      experience
      phone_number
      linkedIn_url
      id
      createdAt
      updatedAt
      username
    }
  }
`;
export const deleteStudentRegister = /* GraphQL */ `
  mutation DeleteStudentRegister(
    $input: DeleteStudentRegisterInput!
    $condition: ModelStudentRegisterConditionInput
  ) {
    deleteStudentRegister(input: $input, condition: $condition) {
      interestedSkills
      recent_college
      degree
      education {
        degree
      }
      current_employee
      your_role
      experience
      phone_number
      linkedIn_url
      id
      createdAt
      updatedAt
      username
    }
  }
`;
export const createMentorRegister = /* GraphQL */ `
  mutation CreateMentorRegister(
    $input: CreateMentorRegisterInput!
    $condition: ModelMentorRegisterConditionInput
  ) {
    createMentorRegister(input: $input, condition: $condition) {
      domain_id
      url
      mentor_service_id
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
      domain_id
      url
      mentor_service_id
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
      domain_id
      url
      mentor_service_id
      phone_number
      id
      createdAt
      updatedAt
      username
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
      mentor_schedule {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
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
      mentor_schedule {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
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
      mentor_schedule {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const createMentorWeekSchedule = /* GraphQL */ `
  mutation CreateMentorWeekSchedule(
    $input: CreateMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    createMentorWeekSchedule(input: $input, condition: $condition) {
      id
      sortId
      day
      checked
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
            username
            owner
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
          username
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const updateMentorWeekSchedule = /* GraphQL */ `
  mutation UpdateMentorWeekSchedule(
    $input: UpdateMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    updateMentorWeekSchedule(input: $input, condition: $condition) {
      id
      sortId
      day
      checked
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
            username
            owner
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
          username
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const deleteMentorWeekSchedule = /* GraphQL */ `
  mutation DeleteMentorWeekSchedule(
    $input: DeleteMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    deleteMentorWeekSchedule(input: $input, condition: $condition) {
      id
      sortId
      day
      checked
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
            username
            owner
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
          username
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const createTimeSchedule = /* GraphQL */ `
  mutation CreateTimeSchedule(
    $input: CreateTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    createTimeSchedule(input: $input, condition: $condition) {
      Mentor {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const updateTimeSchedule = /* GraphQL */ `
  mutation UpdateTimeSchedule(
    $input: UpdateTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    updateTimeSchedule(input: $input, condition: $condition) {
      Mentor {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const deleteTimeSchedule = /* GraphQL */ `
  mutation DeleteTimeSchedule(
    $input: DeleteTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    deleteTimeSchedule(input: $input, condition: $condition) {
      Mentor {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
