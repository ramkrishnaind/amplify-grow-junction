/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDemoSkillsList = /* GraphQL */ `
  subscription OnCreateDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
  ) {
    onCreateDemoSkillsList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDemoSkillsList = /* GraphQL */ `
  subscription OnUpdateDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
  ) {
    onUpdateDemoSkillsList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDemoSkillsList = /* GraphQL */ `
  subscription OnDeleteDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
  ) {
    onDeleteDemoSkillsList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDomainInterestedList = /* GraphQL */ `
  subscription OnCreateDomainInterestedList(
    $filter: ModelSubscriptionDomainInterestedListFilterInput
  ) {
    onCreateDomainInterestedList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDomainInterestedList = /* GraphQL */ `
  subscription OnUpdateDomainInterestedList(
    $filter: ModelSubscriptionDomainInterestedListFilterInput
  ) {
    onUpdateDomainInterestedList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDomainInterestedList = /* GraphQL */ `
  subscription OnDeleteDomainInterestedList(
    $filter: ModelSubscriptionDomainInterestedListFilterInput
  ) {
    onDeleteDomainInterestedList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSuggestedServiceList = /* GraphQL */ `
  subscription OnCreateSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
  ) {
    onCreateSuggestedServiceList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSuggestedServiceList = /* GraphQL */ `
  subscription OnUpdateSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
  ) {
    onUpdateSuggestedServiceList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSuggestedServiceList = /* GraphQL */ `
  subscription OnDeleteSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
  ) {
    onDeleteSuggestedServiceList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
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
      interestedSkills
      linkedIn_url
      id
      createdAt
      updatedAt
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
      interestedSkills
      linkedIn_url
      id
      createdAt
      updatedAt
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
      interestedSkills
      linkedIn_url
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOneOnOne = /* GraphQL */ `
  subscription OnCreateOneOnOne(
    $filter: ModelSubscriptionOneOnOneFilterInput
    $username: String
    $owner: String
  ) {
    onCreateOneOnOne(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateOneOnOne = /* GraphQL */ `
  subscription OnUpdateOneOnOne(
    $filter: ModelSubscriptionOneOnOneFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateOneOnOne(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteOneOnOne = /* GraphQL */ `
  subscription OnDeleteOneOnOne(
    $filter: ModelSubscriptionOneOnOneFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteOneOnOne(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateTextQuery = /* GraphQL */ `
  subscription OnCreateTextQuery(
    $filter: ModelSubscriptionTextQueryFilterInput
    $username: String
    $owner: String
  ) {
    onCreateTextQuery(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateTextQuery = /* GraphQL */ `
  subscription OnUpdateTextQuery(
    $filter: ModelSubscriptionTextQueryFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateTextQuery(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteTextQuery = /* GraphQL */ `
  subscription OnDeleteTextQuery(
    $filter: ModelSubscriptionTextQueryFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteTextQuery(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateWorkshop = /* GraphQL */ `
  subscription OnCreateWorkshop(
    $filter: ModelSubscriptionWorkshopFilterInput
    $username: String
    $owner: String
  ) {
    onCreateWorkshop(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateWorkshop = /* GraphQL */ `
  subscription OnUpdateWorkshop(
    $filter: ModelSubscriptionWorkshopFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateWorkshop(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteWorkshop = /* GraphQL */ `
  subscription OnDeleteWorkshop(
    $filter: ModelSubscriptionWorkshopFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteWorkshop(filter: $filter, username: $username, owner: $owner) {
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
      domain_id
      url
      mentor_service_id
      id
      createdAt
      updatedAt
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
      domain_id
      url
      mentor_service_id
      id
      createdAt
      updatedAt
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
      domain_id
      url
      mentor_service_id
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMentorAvailability = /* GraphQL */ `
  subscription OnCreateMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
    $username: String
    $owner: String
  ) {
    onCreateMentorAvailability(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_availability_id
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
export const onUpdateMentorAvailability = /* GraphQL */ `
  subscription OnUpdateMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateMentorAvailability(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_availability_id
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
export const onDeleteMentorAvailability = /* GraphQL */ `
  subscription OnDeleteMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteMentorAvailability(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_availability_id
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
export const onCreateMentorWeekSchedule = /* GraphQL */ `
  subscription OnCreateMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onCreateMentorWeekSchedule(
      filter: $filter
      username: $username
      owner: $owner
    ) {
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
export const onUpdateMentorWeekSchedule = /* GraphQL */ `
  subscription OnUpdateMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateMentorWeekSchedule(
      filter: $filter
      username: $username
      owner: $owner
    ) {
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
export const onDeleteMentorWeekSchedule = /* GraphQL */ `
  subscription OnDeleteMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteMentorWeekSchedule(
      filter: $filter
      username: $username
      owner: $owner
    ) {
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
export const onCreateTimeSchedule = /* GraphQL */ `
  subscription OnCreateTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onCreateTimeSchedule(filter: $filter, username: $username, owner: $owner) {
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
export const onUpdateTimeSchedule = /* GraphQL */ `
  subscription OnUpdateTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateTimeSchedule(filter: $filter, username: $username, owner: $owner) {
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
export const onDeleteTimeSchedule = /* GraphQL */ `
  subscription OnDeleteTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteTimeSchedule(filter: $filter, username: $username, owner: $owner) {
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
