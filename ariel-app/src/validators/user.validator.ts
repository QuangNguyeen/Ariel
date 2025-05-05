import validator from 'validator';

export class UserValidator {
    static validate(body: Record<string, string>, toValidate: string[]) {
        const errors: string[] = [];

        if (toValidate.includes('name') && validator.isEmpty(body.name?.trim() || '')) {
            errors.push('Name cannot be empty');
        }

        if (toValidate.includes('email') && !validator.isEmail(body.email || '')) {
            errors.push('Invalid email format');
        }

        if (toValidate.includes('password') && validator.isEmpty(body.password?.trim() || '')) {
            errors.push('Password cannot be empty');
        }

        return errors;
    }
}
