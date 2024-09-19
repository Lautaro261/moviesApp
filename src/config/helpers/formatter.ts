

export class Formatter{

    public static currency (value: number): string {
        return new Intl.NumberFormat('en-es',{
            style: 'currency',
            currency: 'USD',
        }).format(value);
    }
}
