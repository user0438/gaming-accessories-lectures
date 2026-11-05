export const currencyFormatter = new Intl.NumberFormat('de-AT', {
    style: 'currency',
    currency: 'EUR'
});

export function formatPrice(value) {
    const price = Number(value);
    if(!Number.isFinite(price)) {
        throw new Error(`Invalid price value: ${value}`);
    }
}