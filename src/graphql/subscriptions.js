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
export const onCreateStudentRegister = /* GraphQL */ `
  subscription OnCreateStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
  ) {
    onCreateStudentRegister(filter: $filter) {
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
    }
  }
`;
export const onUpdateStudentRegister = /* GraphQL */ `
  subscription OnUpdateStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
  ) {
    onUpdateStudentRegister(filter: $filter) {
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
    }
  }
`;
export const onDeleteStudentRegister = /* GraphQL */ `
  subscription OnDeleteStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
  ) {
    onDeleteStudentRegister(filter: $filter) {
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
    }
  }
`;
export const onCreateOneOnOne = /* GraphQL */ `
  subscription OnCreateOneOnOne($filter: ModelSubscriptionOneOnOneFilterInput) {
    onCreateOneOnOne(filter: $filter) {
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
export const onUpdateOneOnOne = /* GraphQL */ `
  subscription OnUpdateOneOnOne($filter: ModelSubscriptionOneOnOneFilterInput) {
    onUpdateOneOnOne(filter: $filter) {
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
export const onDeleteOneOnOne = /* GraphQL */ `
  subscription OnDeleteOneOnOne($filter: ModelSubscriptionOneOnOneFilterInput) {
    onDeleteOneOnOne(filter: $filter) {
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
export const onCreateTextQuery = /* GraphQL */ `
  subscription OnCreateTextQuery(
    $filter: ModelSubscriptionTextQueryFilterInput
  ) {
    onCreateTextQuery(filter: $filter) {
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
export const onUpdateTextQuery = /* GraphQL */ `
  subscription OnUpdateTextQuery(
    $filter: ModelSubscriptionTextQueryFilterInput
  ) {
    onUpdateTextQuery(filter: $filter) {
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
export const onDeleteTextQuery = /* GraphQL */ `
  subscription OnDeleteTextQuery(
    $filter: ModelSubscriptionTextQueryFilterInput
  ) {
    onDeleteTextQuery(filter: $filter) {
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
export const onCreateWorkshop = /* GraphQL */ `
  subscription OnCreateWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onCreateWorkshop(filter: $filter) {
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
export const onUpdateWorkshop = /* GraphQL */ `
  subscription OnUpdateWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onUpdateWorkshop(filter: $filter) {
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
export const onDeleteWorkshop = /* GraphQL */ `
  subscription OnDeleteWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onDeleteWorkshop(filter: $filter) {
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
export const onCreateCourses = /* GraphQL */ `
  subscription OnCreateCourses($filter: ModelSubscriptionCoursesFilterInput) {
    onCreateCourses(filter: $filter) {
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
export const onUpdateCourses = /* GraphQL */ `
  subscription OnUpdateCourses($filter: ModelSubscriptionCoursesFilterInput) {
    onUpdateCourses(filter: $filter) {
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
export const onDeleteCourses = /* GraphQL */ `
  subscription OnDeleteCourses($filter: ModelSubscriptionCoursesFilterInput) {
    onDeleteCourses(filter: $filter) {
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
export const onCreatePackages = /* GraphQL */ `
  subscription OnCreatePackages($filter: ModelSubscriptionPackagesFilterInput) {
    onCreatePackages(filter: $filter) {
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
export const onUpdatePackages = /* GraphQL */ `
  subscription OnUpdatePackages($filter: ModelSubscriptionPackagesFilterInput) {
    onUpdatePackages(filter: $filter) {
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
export const onDeletePackages = /* GraphQL */ `
  subscription OnDeletePackages($filter: ModelSubscriptionPackagesFilterInput) {
    onDeletePackages(filter: $filter) {
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
export const onCreateConfigurations = /* GraphQL */ `
  subscription OnCreateConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
  ) {
    onCreateConfigurations(filter: $filter) {
      timezone
      username
      calender
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
export const onUpdateConfigurations = /* GraphQL */ `
  subscription OnUpdateConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
  ) {
    onUpdateConfigurations(filter: $filter) {
      timezone
      username
      calender
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
export const onDeleteConfigurations = /* GraphQL */ `
  subscription OnDeleteConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
  ) {
    onDeleteConfigurations(filter: $filter) {
      timezone
      username
      calender
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
export const onCreateMentorRegister = /* GraphQL */ `
  subscription OnCreateMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
  ) {
    onCreateMentorRegister(filter: $filter) {
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
    }
  }
`;
export const onUpdateMentorRegister = /* GraphQL */ `
  subscription OnUpdateMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
  ) {
    onUpdateMentorRegister(filter: $filter) {
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
    }
  }
`;
export const onDeleteMentorRegister = /* GraphQL */ `
  subscription OnDeleteMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
  ) {
    onDeleteMentorRegister(filter: $filter) {
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
    }
  }
`;
export const onCreateMentorAvailability = /* GraphQL */ `
  subscription OnCreateMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
  ) {
    onCreateMentorAvailability(filter: $filter) {
      mentor_availability_id
      username
      mentor_schedule {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMentorAvailability = /* GraphQL */ `
  subscription OnUpdateMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
  ) {
    onUpdateMentorAvailability(filter: $filter) {
      mentor_availability_id
      username
      mentor_schedule {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMentorAvailability = /* GraphQL */ `
  subscription OnDeleteMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
  ) {
    onDeleteMentorAvailability(filter: $filter) {
      mentor_availability_id
      username
      mentor_schedule {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMentorWeekSchedule = /* GraphQL */ `
  subscription OnCreateMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
  ) {
    onCreateMentorWeekSchedule(filter: $filter) {
      id
      sortId
      day
      checked
      username
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            username
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          username
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMentorWeekSchedule = /* GraphQL */ `
  subscription OnUpdateMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
  ) {
    onUpdateMentorWeekSchedule(filter: $filter) {
      id
      sortId
      day
      checked
      username
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            username
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          username
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMentorWeekSchedule = /* GraphQL */ `
  subscription OnDeleteMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
  ) {
    onDeleteMentorWeekSchedule(filter: $filter) {
      id
      sortId
      day
      checked
      username
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            username
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          username
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTimeSchedule = /* GraphQL */ `
  subscription OnCreateTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
  ) {
    onCreateTimeSchedule(filter: $filter) {
      Mentor {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      username
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimeSchedule = /* GraphQL */ `
  subscription OnUpdateTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
  ) {
    onUpdateTimeSchedule(filter: $filter) {
      Mentor {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      username
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimeSchedule = /* GraphQL */ `
  subscription OnDeleteTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
  ) {
    onDeleteTimeSchedule(filter: $filter) {
      Mentor {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      username
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onCreateSchedule(filter: $filter) {
      availableSameTime
      username
      unavailableDates {
        id
        date
      }
      daySchedules {
        id
        day
        startTime
        endTime
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onUpdateSchedule(filter: $filter) {
      availableSameTime
      username
      unavailableDates {
        id
        date
      }
      daySchedules {
        id
        day
        startTime
        endTime
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onDeleteSchedule(filter: $filter) {
      availableSameTime
      username
      unavailableDates {
        id
        date
      }
      daySchedules {
        id
        day
        startTime
        endTime
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      given_name
      username
      family_name
      picture
      email
      kyc_done
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      given_name
      username
      family_name
      picture
      email
      kyc_done
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      given_name
      username
      family_name
      picture
      email
      kyc_done
      id
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
<<<<<<< HEAD
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
export const onCreateCourses = /* GraphQL */ `
  subscription OnCreateCourses(
    $filter: ModelSubscriptionCoursesFilterInput
    $username: String
    $owner: String
  ) {
    onCreateCourses(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateCourses = /* GraphQL */ `
  subscription OnUpdateCourses(
    $filter: ModelSubscriptionCoursesFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateCourses(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteCourses = /* GraphQL */ `
  subscription OnDeleteCourses(
    $filter: ModelSubscriptionCoursesFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteCourses(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onCreatePackages = /* GraphQL */ `
  subscription OnCreatePackages(
    $filter: ModelSubscriptionPackagesFilterInput
    $username: String
    $owner: String
  ) {
    onCreatePackages(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdatePackages = /* GraphQL */ `
  subscription OnUpdatePackages(
    $filter: ModelSubscriptionPackagesFilterInput
    $username: String
    $owner: String
  ) {
    onUpdatePackages(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onDeletePackages = /* GraphQL */ `
  subscription OnDeletePackages(
    $filter: ModelSubscriptionPackagesFilterInput
    $username: String
    $owner: String
  ) {
    onDeletePackages(filter: $filter, username: $username, owner: $owner) {
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
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule(
    $filter: ModelSubscriptionScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onCreateSchedule(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule(
    $filter: ModelSubscriptionScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateSchedule(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule(
    $filter: ModelSubscriptionScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteSchedule(filter: $filter, username: $username, owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateConfigurations = /* GraphQL */ `
  subscription OnCreateConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
    $username: String
    $owner: String
  ) {
    onCreateConfigurations(
      filter: $filter
      username: $username
      owner: $owner
    ) {
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
      owner
    }
  }
`;
export const onUpdateConfigurations = /* GraphQL */ `
  subscription OnUpdateConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateConfigurations(
      filter: $filter
      username: $username
      owner: $owner
    ) {
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
      owner
    }
  }
`;
export const onDeleteConfigurations = /* GraphQL */ `
  subscription OnDeleteConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteConfigurations(
      filter: $filter
      username: $username
      owner: $owner
    ) {
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
      owner
    }
  }
`;
=======
>>>>>>> da0940ea6d9d46ef4afa2e580942935b69026aef
