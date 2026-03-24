export interface Student {
    rollNo: string;
    name: string;
    fatherName: string;
    gender: string;
    class: string;
    group: string;
    school: string;
    cnic: string;
    phone: string;
    venue: string;
}

export const studentsData: Student[] = [
    {
        rollNo: "OMJ-SSC-400501",
        name: "SUMAIYA",
        fatherName: "ABDUL RASHEED",
        gender: "Female",
        class: "X",
        group: "Science",
        school: "The Educators (Huseinabad Campus)",
        cnic: "5432176543210",
        phone: "03313416850",
        venue: "Husein Ebrahim Sports Complex, FB Area, Karachi"
    },
    {
        rollNo: "OMJ-SSC-500501",
        name: "MUHAMMAD AHMED",
        fatherName: "TAYYAB SURIYA",
        gender: "Male",
        class: "IX",
        group: "Science",
        school: "Little Haven School",
        cnic: "5432176543210",
        phone: "03313416850",
        venue: "Husein Ebrahim Sports Complex, FB Area, Karachi"
    },
];