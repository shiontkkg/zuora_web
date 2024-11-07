

export type RegistrationForm = {
    businessForm: string;
    familyName: string;
    firstName: string;
    familyNameKana: string;
    firstNameKana: string;
    planId: string;
    planName: string;
    planPrice: number;
    planPriceLabel: string;
}

export type PlanInfo = {
    planId: string;
    planName: string;
    price: number;
    priceLabel: string;
    priceDescription: string;
    planDescription: string;
}