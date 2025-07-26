import { Pages } from '@/constants/enums';
import { IFormField, IFormFieldsVariables } from '@/types/app';
import { Translations } from "@/types/translations";

interface Props extends IFormFieldsVariables{
    translations: Translations;
  }
const useFormFields = ({ slug, translations }: Props) => {
    const loginFields = (): IFormField[] => [
        {
          label: translations.auth.login.email.label,
          name: "email",
          type: "email",
          placeholder:"Please enter your email",
          autoFocus: true,
        },
        {
          label:translations.auth.login.password.label,
          name: "password",
          placeholder:"Enter your password",
          type: "password",
        },
      ];
      const getFormFields = (): IFormField[] => {
        switch (slug) {
          case Pages.LOGIN:
            return loginFields();
          default:
            return [];
        }
      };
      return {
        getFormFields,
      };
}

export default useFormFields
