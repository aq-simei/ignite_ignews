import { FC, ReactElement, ReactNode } from "react";
import {render, RenderOptions} from '@testing-library/react'
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth/core/types";

const noSession = null

const authenticatedSession: Session = {
  expires: '15',
  user: {
    name: 'test user',
    email: 'test@email.test',
    image: ''
  }
}

const ProvidersWithoutLogin: FC<{children: ReactNode}> = ({children}) => {
  return(
    <SessionProvider session={noSession}>
      {children}
    </SessionProvider>
  )
}

const ProvidersWithLoginAuth: FC<{children: ReactNode}> = ({children}) => {
  return(
    <SessionProvider session={authenticatedSession}>
      {children}
    </SessionProvider>
  )
}

const CustomRenderWithoutLogin = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>, 
) => render(ui, {wrapper: ProvidersWithoutLogin, ...options})

const CustomRenderWithLoginAuth = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: ProvidersWithLoginAuth, ...options})

export * from '@testing-library/react';
export {CustomRenderWithoutLogin as noAuthRender};
export { CustomRenderWithLoginAuth as AuthRender }
