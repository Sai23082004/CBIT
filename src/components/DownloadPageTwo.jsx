import { useEffect, useState } from "react"
import Navbar from "../navbar"

const DownloadPageTwo = () => {
    const semisters = [
        "Computer Science and Engineering", 
        "CSE(Data Science)",
        "CSE(Artificial Intelligence)",
        "CSE(Artificial Intelligence & Machine Learning)",
        "Electronics & Communication Engineering",
        "Electrical and Electronics Engineering",
        "Mechanical Engineering",
        "Civil Engineering"

    ]
    const semisterPaper = [
        [
            "Discrete Mathematics & Graph Theory ", 
            "Universal Human Values 2",
            "Advanced Data Structures & Algorithms Analysis", 
            "Object-Oriented Programming Through JAVA ",
            "Digital Logic and Computer Organization ",
            "Environmental Science"
        ],
        [
            "Discrete Mathematics & Graph Theory ",
            "Universal Human Values 2",
            "Advanced Data Structures & Algorithms Analysis",
            "Object-Oriented Programming Through JAVA ",
            "Environmental Science",
            "Introduction To Data Science "
        ],
        [
            "Discrete Mathematics & Graph Theory ",
            "Universal Human Values 2",
            "Advanced Data Structures & Algorithms Analysis",
            "Object-Oriented Programming Through JAVA ",
            "Environmental Science",
            "Artificial Intelligence "
        ],
        [
            "Discrete Mathematics & Graph Theory ",
            "Universal Human Values 2",
            "Advanced Data Structures & Algorithms Analysis",
            "Object-Oriented Programming Through JAVA ",
            "Environmental Science",
            "Artificial Intelligence "
        ],
        [
            "Probability And Complex Variables",
            "Universal Human Values 2",
            "Electronic Devises And Circuits",
            "Digital Circuit Design",
            "Environmental Science",
            "Signals,Systems And Stochastis",
        ],
        [
            "COMPLEX VARIABLES & NUMERICAL METHODS",
            "UNIVERSAL HMAN VALUES 2-UNDERSTANDING HARMONY & ETHICAL HUMAN CONDUCT",
            "ELECTROMAGNETIC FIELD THEORY",
            "ELECTRICAL CIRCUIT ANALYSIS-II",
            "DC MACHINES & TRANSFORMERS",
            "ENVIRONMENTAL SCIENCE"
        ],
        [],
        []
    ]
    const semisterPaperDownloads = [
        [
            ["Syllabus","Study Material All Units ","Previous Year Question Papers","Only Questions (All Units)"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
        ],
        [
            ["Syllabus","Study Material All Units ","Previous Year Question Papers","Only Questions (All Units)"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
        ],
        [
            ["Syllabus","Study Material All Units ","Previous Year Question Papers","Only Questions (All Units)"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
        ],
        [
            ["Syllabus","Study Material All Units ","Previous Year Question Papers","Only Questions (All Units)"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers","Important Questions With Answers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
        ],
        [
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
        ],
        [
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
            ["Syllabus","Study Material All Units ","Previous Year Question Papers"],
        ],
        [[]],
        [[]]
    ]
    const semisterPaperDownloadsPdfs = [
        [
            ["https://drive.google.com/file/d/1OA1RbB-0wq5ZSe3lzwwppS36IvsrUTLy/view?usp=sharing","https://drive.google.com/file/d/1StUNnJE9ZHi8d6gX-vW0H28ISJLeJvMZ/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1GxA8bD9h3B8pKnAw0d6PAsh25T87OqTP/view?usp=sharing"],
            ["https://drive.google.com/file/d/1WzZEZGf64r022nlR2Apyan7qN00GUIzs/view?usp=sharing","https://drive.google.com/file/d/1ogee9D4lgqYfJfBx1WSGBPpaYAd4sfjB/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1GWchwmrxPznIJNg8M6Sl91r3fGcuBOd7/view?usp=sharing","https://drive.google.com/file/d/1VME0WHgOKetvSTC745qy8nkzfQVjOA-u/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1DpZ61Zm5bmpuRh1Bec9TF513j-8k_0Rg/view?usp=sharing","https://drive.google.com/file/d/1qW4DpomNnu5okXGW1cllJGUjt6ftl0ha/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1gMOHn3BA3UF5kxhXpJ5-amR1ExYr9Wgu/view?usp=sharing"],
            ["https://drive.google.com/file/d/19UvArFR1gm7ApFB-_6zQ93Jvr1T4N0nJ/view?usp=sharing","https://drive.google.com/file/d/1nXFqX2qsMUEr0RN96nIPCT2ll1XAEhzD/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1xY97e09oyo7V2YPj30M2BYlk5K7uvoR9/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],

        ],
        [
            ["https://drive.google.com/file/d/1T34a4dP-dnYqFPjGxVJYK4mGQNAyBL8m/view?usp=sharing","https://drive.google.com/file/d/1502QR7oH0tO4vf_5AZO58xwXtfy3BId9/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1sFviMdtgNS52LvGfl2kTa5TzCmiueUHS/view?usp=sharing"],
            ["https://drive.google.com/file/d/1sVGO8seXcyuiEZkiSEJ6MHs3QNCHpF3P/view?usp=sharing","https://drive.google.com/file/d/1qgitSIdjqxnzl4KcU6a2S9611zK9PAO5/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1UN4lJPFqCRvRwhHGyNOhuggHJNYUKUaL/view?usp=sharing","https://drive.google.com/file/d/1VME0WHgOKetvSTC745qy8nkzfQVjOA-u/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1usB4GECG4RFFVlo2ZMTY_a0q6_gvRZbV/view?usp=sharing","https://drive.google.com/file/d/1qW4DpomNnu5okXGW1cllJGUjt6ftl0ha/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1xSM8_2yX5Vvl5MT9H0pOzW9XDuVq81V0/view?usp=sharing"],
            ["https://drive.google.com/file/d/1xY97e09oyo7V2YPj30M2BYlk5K7uvoR9/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/13F_XgTrXX6sw1ex0Eeat7Dc9-XH_QNyv/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],

        ],
        [
            ["https://drive.google.com/file/d/179dqVKISouzPIknMGgAo7ENHDdST4gBT/view?usp=sharing","https://drive.google.com/file/d/1RY7WEtHYaCDC5DUSlLuHiHNA5YgPcCBP/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1hVRoXjTi63pim-iSU3_LXGO8_WlxFw57/view?usp=sharing"],
            ["https://drive.google.com/file/d/1iz08Au4lEsZMKqoGSdeIzl0I9Nw4iHBx/view?usp=sharing","https://drive.google.com/file/d/10Zg9EjcZ6u_E3C3DLT5sVtpSig0ECGe3/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/19RiPpAVtpbWmJundbsyhjxNU4AQMrtbJ/view?usp=sharing","https://drive.google.com/file/d/1VME0WHgOKetvSTC745qy8nkzfQVjOA-u/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1VbpWOFvD7uby2F2bDw5z_7gzfp2iU27p/view?usp=sharing","https://drive.google.com/file/d/1qW4DpomNnu5okXGW1cllJGUjt6ftl0ha/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1G0l20SOOqomZrcXw7whtr5CsFYUJ60WB/view?usp=sharing"],
            ["https://drive.google.com/file/d/1xY97e09oyo7V2YPj30M2BYlk5K7uvoR9/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],

        ],
        [
            ["https://drive.google.com/file/d/1yo8DaEDPKSDSkgiZTZ11jzekn3juyjpv/view?usp=sharing","https://drive.google.com/file/d/1PYYcu0QHRviMgtpMsXEfQuq5P0CVlI_Z/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1zn-iwvpkLjWNQMgXUniQbhgPOAVZTpLE/view?usp=sharing"],
            ["https://drive.google.com/file/d/1oeYC3-HN4ycKka2xsQYEIumFxEw9MThK/view?usp=sharing","https://drive.google.com/file/d/1pH_5tPXGooMB7UKLf1FVfaJKi0p4lkjb/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1UXWzld-Ld6VTZyYZ7rwgDGfXNOmRv4UQ/view?usp=sharing","https://drive.google.com/file/d/1VME0WHgOKetvSTC745qy8nkzfQVjOA-u/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1jhK0fOwG-KgkQQQXsHP8lpvgNdtejFEj/view?usp=sharing","https://drive.google.com/file/d/1qW4DpomNnu5okXGW1cllJGUjt6ftl0ha/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1tHSKGq2FWXrfZbcgh20lzaG_4hpeFlWI/view?usp=sharing"],
            ["https://drive.google.com/file/d/1xY97e09oyo7V2YPj30M2BYlk5K7uvoR9/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],

        ],
        [
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],

        ],
        [
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],
            ["https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing","https://drive.google.com/file/d/1kpI78O4wXThyWRhsCh4sbYgM3IqRRv5r/view?usp=sharing"],

        ],
        [[]],
        [[]]
    ]



    {/* material section */ }
    const qb = [
        "Computer Science and Engineering", "CSE(Data Science)", "CSE(Artificial Intelligence)", "CSE(Artificial Intelligence & Data Science)", "CSE(Artificial Intelligence & Machine Learning)", "Electronics & Communication Engineering", "Electrical and Electronics Engineering", "Mechanical Engineering"


    ]
    const qbp = [
        [],
    ]
    const qbd = [
        [[]],
        [[]]
    ]
    const qbdf = [
        [[]],
        [[]]
    ]



    return (
        <div className="" style={{ overflowX: "hidden" }}>

            <div className="position-relative w-100">
                <Navbar />
                {/* imge */}

            </div>
            {/* question banks   */}
            <div className="my-5">
                <h1 className="text-center fw-bold" >2nd Year 1st Semester   </h1>

                {
                    semisters.map((value, i) => {
                        return <div key={i}>
                            <Papers ind={i} data={semisterPaper || []} pdfFiles={semisterPaperDownloadsPdfs} data2={semisterPaperDownloads} value={value} />
                        </div>
                    })
                }

            </div>

            {/* materials   */}
            <div className="my-5">
                <h1 className="text-center fw-bold" >2nd Year 2nd Semester  </h1>

                {
                    qb.map((value, i) => {
                        return <>
                            <Papers ind={i} data={qbp} pdfFiles={qbdf} data2={qbd} value={value} />
                        </>
                    })
                }

            </div>




             {/* footer  */}
             <div className="text-light p-lg-4" style={{ backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2023/05/footer.png")`, backgroundRepeat: 'repeat' }}>
                <div className="container-lg">
                    <div className="row p-5 text-dark">
                        <div className="col-md-2 col-sm-6 col-12">
                            <div className="d-flex align-items-center text-dark flex-column">
                                <img className="img-fluid" style={{ width: "15rem" }} src="https://cbit.edu.in/wp-content/uploads/2023/05/cbit.png" alt="" />
                                <p className="text-left">Chaitanya Bharathi Institute Of Technology - Proddatur in Y S R (Kadapa) District, Andhra Pradesh</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <h4 className="fw-bold py-4 ps-4 ">Important Links</h4>
                            <ul className="text-primary">
                                <li ><a className=" text-primary" href="https://cbit.edu.in/userfiles/link/AICTE_Mandatory%20Disclosures.pdf">AICTE Mandatory Disclosures</a></li>
                                <li><a href="https://cbit.edu.in/iic/" className="text-primary">IIC</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/nss/">NSS</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/student-achievements/">Student Achievements</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/iqac/faculty-achievements/">Faculty Achievements</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/student-welfare/">Student Welfare</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/downloads/">Downloads</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/committee/">Committee</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-12">
                            <h4 className="fw-bold py-4 ps-4">Academics</h4>
                            <ul className="text-primary">
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/">Admission Procedure</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/academic-calendar/">Academic Calendar</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/academic-council/">Academic Council</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/about/affiliations/">Affiliations</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/admission-form/">Admission Form</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/courses-offered/">Courses Offered</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/campus-life/">Campus Life</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/contact/">Contact</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/infrastructure/cafeteria/">Cafeteria</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 ms-md-4 col-sm-6 col-12">
                            <h4 className="fw-bold py-4">Get in touch</h4>
                            <div>
                                <p>Chaitanya Bharathi Institute Of Technology,</p>
                                <p>Vidya Nagar, Proddatur, YSR Kadapa (Dist.), Andhra Pradesh 516360,</p>
                                <p>Phone: <span className="text-primary">+91-7659807111</span></p>
                                <p>Email: <span className="text-primary"> info@cbit.edu.in</span></p>
                                <div className="d-flex gap-4">
                                    <a className="text-primary" href="https://cbit.edu.in/departments/">Departments</a>
                                    <a className="text-primary" href="https://cbit.edu.in/iqac/aqar/">AQAR</a>
                                    <a className="text-primary" href="https://cbit.edu.in/placements/">Placements</a>
                                    <a className="text-primary" href="https://cbit.edu.in/contact/">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3" style={{ background: "#203764" }}>
                <div className="mx-auto text-center">
                    <img className="img-fluid" style={{ width: "5rem" }} src="https://cbit.edu.in/wp-content/uploads/2023/05/cbit.png" alt="" />
                    <p style={{ color: "#8A8A8E" }} className="text-center">
                        Copyright © 2024 www.cbit.edu.in | Designed 
                        <span style={{ color: "#1E77D1" }}> Shadow coders <img style={{ width: "1rem" }} className="img-fluid" src="https://www.briaux.com/briaux16.png" alt="" /></span>
                    </p>
                </div>
            </div>


        </div>
    )
}

const Papers = ({ data, value, ind, data2, pdfFiles }) => {
    const [open, setOpen] = useState(false)

    return <>

        <div className="mx-auto w-100 text-center gap-3">
            <div className=" p-2">
                <button onClick={() => setOpen(!open)} style={{ borderWidth: '2px', textTransform: 'uppercase', borderStyle: 'solid', borderColor: '#A52A2A', background: '#DEFDFF', borderRadius: '15px' }}
                    className="btn  p-3 hoverDoenloadBtn py-2 fw-semibold">
                    {value}
                </button>
            </div>
            <div>
                {
                    Array.isArray(data[ind]) ? <>
                        {
                            data[ind].map((value2, i2) => {
                                return <>
                                    <SemisterPaperDownloads data={data2 || [[]]} pdfFiles={pdfFiles} ind={ind} ind2={i2} value={value2} />
                                </>
                            })
                        } </> : null
                }
            </div>
        </div>

    </>
}

const SemisterPaperDownloads = ({ data, value, ind, ind2, pdfFiles }) => {
    const [open, setOpen] = useState(false)
    const p = ''

    return <>
        <div style={{}} className="row d-flex justify-content-center align-items-center mx-4">
            <button onClick={() => setOpen(!open)} className="text-center col-lg-6 d-flex justify-content-between mx-lg-5 mx-3 btn mt-2 p-2 fw-semibold" style={{ background: '#F2D1FF', }}>
                {value} <span>{open ? "-" : "+"}</span> </button>
            {/* value3.toUppercase.replace(" ","") */}
        </div>
        <div className="row d-flex justify-content-center align-items-center mx-4">
            {
                open ?
                    Array.isArray(data[ind][ind2]) ?
                        <>
                            {
                                data[ind][ind2].map((value3, i3) => {
                                    return <a href={pdfFiles[ind][ind2][i3]} download style={{ background: '#E6E6E6', }} className="text-primary  col-lg-6 mx-lg-5 mx-3 mt-1 p-2 py-1 fs-6">{value3}</a>
                                })
                            }
                        </>
                        : null : null
            }
        </div>

    </>

}
export default DownloadPageTwo