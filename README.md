# angular-template
Angular template with clean structure and reusable components \
\
Example of structure \
To note below is just an example, code may not be same

~~~~
src/
└── app/
    ├── core/                                # singleton, app-wide logic
    │   ├── services/
    │   │   ├── api.service.ts
    │   │   ├── auth.service.ts
    │   │   └── storage.service.ts
    │   ├── interceptors/
    │   │   └── http.interceptor.ts
    │   ├── guards/
    │   │   └── auth.guard.ts
    │   ├── models/
    │   └── core.module.ts
    │
    ├── shared/                              # reusable, no business logic
    │   ├── components/
    │   │   ├── button/
    │   │   ├── loader/
    │   │   └── dialogs/
    │   │       ├── confirm-dialog/
    │   │       │   ├── confirm-dialog.component.ts
    │   │       │   ├── confirm-dialog.component.html
    │   │       │   └── confirm-dialog.component.scss
    │   │       │
    │   │       ├── alert-dialog/
    │   │       └── base-dialog/              # optional wrapper layout
    │   │
    │   ├── directives/
    │   ├── pipes/
    │   ├── models/
    │   ├── utils/
    │   └── shared.module.ts
    │
    ├── features/                            # business domains
    │   ├── auth/
    │   │   ├── pages/
    │   │   │   ├── login/
    │   │   │   └── register/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── models/
    │   │   ├── dialogs/                     # feature-specific dialogs
    │   │   │   └── forgot-password-dialog/
    │   │   ├── auth-routing.module.ts
    │   │   └── auth.module.ts
    │   │
    │   ├── user/
    │   │   ├── pages/
    │   │   │   ├── user-list/
    │   │   │   └── user-detail/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── models/
    │   │   ├── dialogs/
    │   │   │   ├── user-edit-dialog/
    │   │   │   └── user-delete-dialog/
    │   │   ├── user-routing.module.ts
    │   │   └── user.module.ts
    │   │
    │   ├── dashboard/
    │   │   ├── pages/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── models/
    │   │   ├── dashboard-routing.module.ts
    │   │   └── dashboard.module.ts
    │   │
    │   └── settings/
    │       ├── pages/
    │       ├── components/
    │       ├── services/
    │       ├── models/
    │       ├── dialogs/
    │       ├── settings-routing.module.ts
    │       └── settings.module.ts
    │
    ├── layout/                              # app shell
    │   ├── header/
    │   ├── sidebar/
    │   ├── footer/
    │   └── layout.component.ts
    │
    ├── app-routing.module.ts                # lazy loading entry
    ├── app.component.ts
    └── app.module.ts
~~~~
