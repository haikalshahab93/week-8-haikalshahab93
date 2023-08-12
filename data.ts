interface FinancialTabel {
    id: number;
    type: string;
    finance: string;
    detail: string;
    cash: number;
}

let financial: FinancialTabel[] = [
    { id: 1, type: 'Cash In', finance: 'Belanja', detail: 'Belanja Bulanan', cash: 4000000 },
    { id: 2, type: 'Cash Out', finance: 'Gaji', detail: 'Bonus Keuntungan', cash: 500000 },
    { id: 3, type: 'Cash Out', finance: 'Bayaran Tanggungan', detail: 'Bayar Cicilan Rumah', cash: 250000 },
];

export {FinancialTabel,financial}