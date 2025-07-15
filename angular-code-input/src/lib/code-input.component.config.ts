import {InjectionToken, Provider} from '@angular/core';

export const CodeInputComponentConfigToken = new InjectionToken<CodeInputComponentConfig>('CodeInputComponentConfig');

export interface CodeInputComponentConfig {
  codeLength?: number;
  inputType?: string;
  inputMode?: string;
  initialFocusField?: number;
  isCharsCode?: boolean;
  isCodeHidden?: boolean;
  isPrevFocusableAfterClearing?: boolean;
  isFocusingOnLastByClickIfFilled?: boolean;
  code?: string | number;
  disabled?: boolean;
  autocapitalize?: string;
}

export const defaultComponentConfig: CodeInputComponentConfig = {
  codeLength: 4,
  inputType: 'tel',
  inputMode: 'numeric',
  initialFocusField: undefined,
  isCharsCode: false,
  isCodeHidden: false,
  isPrevFocusableAfterClearing: true,
  isFocusingOnLastByClickIfFilled: false,
  code: undefined,
  disabled: false,
  autocapitalize: undefined
};

/**
 * Modern provider function for CodeInput configuration
 * @param config - Configuration object for CodeInput component
 * @returns Provider array for use in bootstrapApplication or NgModule providers
 */
export function provideCodeInputConfig(config: CodeInputComponentConfig): Provider {
  return {
    provide: CodeInputComponentConfigToken,
    useValue: { ...defaultComponentConfig, ...config }
  };
}

/**
 * Factory function for creating configuration with custom logic
 * @param configFactory - Factory function that returns configuration
 * @returns Provider for use in bootstrapApplication or NgModule providers
 */
export function provideCodeInputConfigFactory(configFactory: () => CodeInputComponentConfig): Provider {
  return {
    provide: CodeInputComponentConfigToken,
    useFactory: configFactory
  };
}
