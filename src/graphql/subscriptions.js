/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDemoSkillsList = /* GraphQL */ `
  subscription OnCreateDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
  ) {
    onCreateDemoSkillsList(filter: $filter) {
      id
      username
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
      username
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
      username
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
      username
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
      username
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
      username
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
      username
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
      username
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
      username
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
      about_yourself {
        grow_junction_url
        first_name
        last_name
        short_description
        about_yourself
      }
      current_employee
      linkedIn_url
      degree
      experience
      recent_college
      your_role
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
      interestedSkills
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
      about_yourself {
        grow_junction_url
        first_name
        last_name
        short_description
        about_yourself
      }
      current_employee
      linkedIn_url
      degree
      experience
      recent_college
      your_role
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
      interestedSkills
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
      about_yourself {
        grow_junction_url
        first_name
        last_name
        short_description
        about_yourself
      }
      current_employee
      linkedIn_url
      degree
      experience
      recent_college
      your_role
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
      interestedSkills
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
export const onCreateMentorRegister = /* GraphQL */ `
  subscription OnCreateMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
  ) {
    onCreateMentorRegister(filter: $filter) {
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
export const onUpdateMentorRegister = /* GraphQL */ `
  subscription OnUpdateMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
  ) {
    onUpdateMentorRegister(filter: $filter) {
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
export const onDeleteMentorRegister = /* GraphQL */ `
  subscription OnDeleteMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
  ) {
    onDeleteMentorRegister(filter: $filter) {
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
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onCreateSchedule(filter: $filter) {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onUpdateSchedule(filter: $filter) {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onDeleteSchedule(filter: $filter) {
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
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onCreateUserInfo(filter: $filter) {
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
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onUpdateUserInfo(filter: $filter) {
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
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onDeleteUserInfo(filter: $filter) {
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
export const onCreateConfigurations = /* GraphQL */ `
  subscription OnCreateConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
  ) {
    onCreateConfigurations(filter: $filter) {
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
export const onUpdateConfigurations = /* GraphQL */ `
  subscription OnUpdateConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
  ) {
    onUpdateConfigurations(filter: $filter) {
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
export const onDeleteConfigurations = /* GraphQL */ `
  subscription OnDeleteConfigurations(
    $filter: ModelSubscriptionConfigurationsFilterInput
  ) {
    onDeleteConfigurations(filter: $filter) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
      accountType
      accountHolderName
      username
      ifscCode
      accountNumber
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
      accountType
      accountHolderName
      username
      ifscCode
      accountNumber
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
      accountType
      accountHolderName
      username
      ifscCode
      accountNumber
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentBooking = /* GraphQL */ `
  subscription OnCreateStudentBooking(
    $filter: ModelSubscriptionStudentBookingFilterInput
  ) {
    onCreateStudentBooking(filter: $filter) {
      name
      emailId
      callAbout
      mobileNumber
      receiveUpdate
      timeZone
      bookingDate
      timeSlot
      isSuccess
      successText
      failureText
      serviceType
      username
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentBooking = /* GraphQL */ `
  subscription OnUpdateStudentBooking(
    $filter: ModelSubscriptionStudentBookingFilterInput
  ) {
    onUpdateStudentBooking(filter: $filter) {
      name
      emailId
      callAbout
      mobileNumber
      receiveUpdate
      timeZone
      bookingDate
      timeSlot
      isSuccess
      successText
      failureText
      serviceType
      username
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentBooking = /* GraphQL */ `
  subscription OnDeleteStudentBooking(
    $filter: ModelSubscriptionStudentBookingFilterInput
  ) {
    onDeleteStudentBooking(filter: $filter) {
      name
      emailId
      callAbout
      mobileNumber
      receiveUpdate
      timeZone
      bookingDate
      timeSlot
      isSuccess
      successText
      failureText
      serviceType
      username
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
      description
      createdAt
      updatedAt
      username
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
      description
      createdAt
      updatedAt
      username
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
      description
      createdAt
      updatedAt
      username
    }
  }
`;
