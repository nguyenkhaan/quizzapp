//Gia su day la danh sach cau hoi da load ra 
export type QuestionType = {
    id : number, 
    content : string, 
    A: string, B : string, C: string, D : string 
    answer : string 
}
const QUESTIONS : QuestionType[] = [
  {
    id: 1,
    content: 'Bạn là ai?',
    A: 'Học sinh',
    B: 'Sinh viên',
    C: 'Người đi làm',
    D: 'Khác',
    answer: 'B'
  },
  {
    id: 2,
    content: 'JavaScript là ngôn ngữ gì?',
    A: 'Ngôn ngữ lập trình',
    B: 'Ngôn ngữ đánh dấu',
    C: 'Hệ điều hành',
    D: 'Cơ sở dữ liệu',
    answer: 'A'
  },
  {
    id: 3,
    content: 'HTML dùng để làm gì?',
    A: 'Xử lý logic',
    B: 'Thiết kế giao diện',
    C: 'Lưu trữ dữ liệu',
    D: 'Quản lý server',
    answer: 'B'
  },
  {
    id: 4,
    content: 'CSS có tác dụng chính là gì?',
    A: 'Viết backend',
    B: 'Kết nối database',
    C: 'Trang trí giao diện',
    D: 'Chạy thuật toán',
    answer: 'C'
  },
  {
    id: 5,
    content: 'React là gì?',
    A: 'Framework backend',
    B: 'Thư viện UI',
    C: 'Ngôn ngữ lập trình',
    D: 'Database',
    answer: 'B'
  },
  {
    id: 6,
    content: 'HTTP là gì?',
    A: 'Giao thức truyền dữ liệu',
    B: 'Ngôn ngữ lập trình',
    C: 'Hệ điều hành',
    D: 'Trình duyệt',
    answer: 'A'
  },
  {
    id: 7,
    content: 'LocalStorage dùng để làm gì?',
    A: 'Lưu data tạm trên server',
    B: 'Lưu data vĩnh viễn trên trình duyệt',
    C: 'Lưu cache backend',
    D: 'Quản lý session server',
    answer: 'B'
  },
  {
    id: 8,
    content: 'API là viết tắt của?',
    A: 'Application Programming Interface',
    B: 'Advanced Programming Internet',
    C: 'Application Process Index',
    D: 'Applied Program Interface',
    answer: 'A'
  },
  {
    id: 9,
    content: 'Git dùng để làm gì?',
    A: 'Thiết kế UI',
    B: 'Quản lý mã nguồn',
    C: 'Deploy server',
    D: 'Viết database',
    answer: 'B'
  },
  {
    id: 10,
    content: 'Frontend là gì?',
    A: 'Phần xử lý server',
    B: 'Phần giao diện người dùng',
    C: 'Cơ sở dữ liệu',
    D: 'Hệ điều hành',
    answer: 'B'
  }
];


export default class Questions 
{
    static getQuestionByID(id : number) 
    {
        for (const ques of QUESTIONS) if (ques.id === id) 
          return ques 
        return null  
    } 
    static getAnswerByID(id : number , answer : 'A' | 'B' | 'C' | 'D') 
    {
        for (const ques of QUESTIONS) if (ques.id === id) 
          return answer === ques.answer
        return false 
    }
    static attemptQuiz() 
    {
        let res = [] 
        for (const ques of QUESTIONS) res.push(ques.id) 
        return res 
    }
}