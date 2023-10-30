import { NextPage } from "next";
import { Element } from "react-scroll";

interface Props {}

const Objective: NextPage<Props> = () => {
    return (
        <Element
            name="objective"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col md:flex-row justify-between gap-10"
        >
            <div className="p-5 flex flex-col gap-3 border-l-3 border-green-500 bg-[#0DBC58]/10">
                <div className="text-xl md:text-3xl">
                    🤔 KU Hackathon คืออะไร?
                </div>
                <div>
                    KU Hackathon
                    เป็นงานแข่งขันที่จัดขึ้นโดยมหาวิทยาลัยเกษตรศาสตร์ (Kasetsart
                    University)
                    โดยงานนี้เป็นมหกรรมที่เน้นการพัฒนาและใช้เทคโนโลยีในการแก้ไขปัญหาต่าง
                    ๆ ที่เกิดขึ้นในมหาวิทยาลัยเอง
                    นิสิตจากหลายสาขาที่สนใจและมีความสามารถทางเทคโนโลยีมาเข้าร่วมในงานนี้
                    จะทำงานร่วมกันเพื่อพัฒนาแนวคิดและโครงการต่าง ๆ
                    ที่สามารถช่วยแก้ไขปัญหาในมหาวิทยาลัยเกษตรศาสตร์ต่อไปได้
                </div>
            </div>
            <div className="p-5 flex flex-col gap-3 border-l-3 bg-[#0DBC58]/10 border-green-500">
                <div className="text-xl md:text-2xl">
                    👩‍💻 เป้าหมายหลักของ KU Hackathon
                </div>
                <div>
                    เปิดโอกาสให้นิสิตนำไอเดียที่พัฒนาขึ้นและสร้าง Prototype
                    ของแนวคิดดังกล่าว
                    เพื่อใช้ในการพัฒนาเป็นฟีเจอร์ให้แอปพลิเคชัน "App For Nisit"
                    ที่ใช้ในอนาคต งานนี้เสริมสร้างโอกาสให้นิสิตจากสาขาต่าง ๆ
                    ที่มีความสนใจทางเทคโนโลยีและมีความสามารถในการสร้างสรรค์ได้มีส่วนร่วมในการพัฒนามหาวิทยาลัยของตนเอง
                    โดยทำให้บรรยากาศของบทความดูดีขึ้น
                    และเน้นการพัฒนาและนำไอเดียเหล่านี้สู่การใช้งานจริงในอนาคต
                </div>
            </div>
        </Element>
    );
};

export default Objective;
