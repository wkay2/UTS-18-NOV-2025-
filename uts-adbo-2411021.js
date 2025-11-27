class Leave {
    constructor(employee, quota) {
        this.employee = employee;
        this.quota = quota;
    }

    apply(days) {
        if (days > this.quota) {
            return "Kuota anda tidak cukup untuk mengajukan cuti ini";
        }
        this.quota -= days;
        return `Pengajuan cuti disetujui untuk ${days} hari. Sisa kuota: ${this.quota}`;
    }
}

class AnnualLeave extends Leave {
    constructor(employee) {
        super(employee, 12);
    }
}

class SickLeave extends Leave {
    constructor(employee) {
        super(employee, 2);
    }
}

class MaternityLeave extends Leave {
    constructor(employee) {
        super(employee, 90);
    }
}

const karyawan1 = { name: "Siti", role: "Pegawai" };

const cutiTahunan = new AnnualLeave(karyawan1);
const cutiSakit = new SickLeave(karyawan1);
const cutiMelahirkan = new MaternityLeave(karyawan1);

console.log(cutiTahunan.apply(5));
console.log(cutiTahunan.apply(8));
console.log(cutiSakit.apply(1));
console.log(cutiSakit.apply(2));
console.log(cutiMelahirkan.apply(90));
console.log(cutiMelahirkan.apply(1)); 