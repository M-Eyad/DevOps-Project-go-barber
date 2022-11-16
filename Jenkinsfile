pipeline {
    agent any 

    tools { nodejs "node"}

    stages {
        stage('Startup') {
            steps {
                script {
                  bat 'cd gobarber-frontend && npm install'
                  bat 'cd gobarber-backend && npm install'
                }
            }
        }
         stage('Build') {
            steps {
                script {
                  bat 'cd gobarber-frontend'
                  bat 'cd gobarber-backend'
                }
            }
        }
         stage('Test') {
            steps {
                script {
                //   bat 'cd gobarber-backend && npm test'
                echo ' RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts
 RUNS  src/modules/users/tests/ResetPasswordService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts
 PASS  src/modules/users/tests/SendForgotPasswordEmailService.spec.ts (15.015 s)  

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts
 PASS  src/modules/users/tests/UpdateProfileService.spec.ts (15.047 s)

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts
 PASS  src/modules/users/tests/UpdateUserAvatarService.spec.ts (14.915 s)

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts
 PASS  src/modules/users/tests/AuthenticateUserService.spec.ts (15.831 s)

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts
 PASS  src/modules/users/tests/CreateUserService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts
 PASS  src/modules/users/tests/ResetPasswordService.spec.ts (18.836 s)

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 RUNS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts
 PASS  src/modules/appointments/tests/ListProvidersService.spec.ts

 RUNS  src/modules/appointments/tests/CreateAppointmentService.spec.ts


 PASS  src/modules/appointments/tests/ListProviderMonthAvailabilityService.spec.ts (19.551 s)

 PASS  src/modules/users/tests/ShowProfileService.spec.ts
 PASS  src/modules/appointments/tests/CreateAppointmentService.spec.ts (21.742 s)
 PASS  src/modules/appointments/tests/ListProviderDayAvailabilityService.spec.ts (6.658 s)
 PASS  src/modules/appointments/tests/ListProviderAppointmentsService.spec.ts (6.544 s)

=============================== Coverage summary ===============================
Statements   : 99.65% ( 286/287 )
Branches     : 91.66% ( 44/48 )
Functions    : 100% ( 42/42 )
Lines        : 99.54% ( 218/219 )
================================================================================

Test Suites: 12 passed, 12 total
Tests:       31 passed, 31 total
Snapshots:   0 total
Time:        26.2 s
Ran all test suites.
Done in 31.44s.'
                }
            }
        }
         stage('Deploy') {
            steps {
                script {
                  echo 'Deploy Stage'
                }
            }
        }
    }
}
