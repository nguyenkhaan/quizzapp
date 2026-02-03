//Gia su day la danh sach cau hoi da load ra 
export type QuestionType = {
    id : number, 
    content : string, 
    A: {
      content: string, 
      result : boolean 
    },  
    B : {
      content: string, 
      result: boolean, 
    }, 
    C : {
      content : string, 
      result: boolean 
    }
    D : {
      content : string, 
      result: boolean 
    }
}
const QUESTIONS: QuestionType[] = [
  {
    id: 1,
    content: 'Bạn là ai?',
    A: { content: 'Học sinh', result: false },
    B: { content: 'Sinh viên', result: true },
    C: { content: 'Người đi làm', result: false },
    D: { content: 'Khác', result: false },
  },
  {
    id: 2,
    content: 'JavaScript là ngôn ngữ gì?',
    A: { content: 'Ngôn ngữ lập trình', result: true },
    B: { content: 'Ngôn ngữ đánh dấu', result: false },
    C: { content: 'Hệ điều hành', result: false },
    D: { content: 'Cơ sở dữ liệu', result: false },
  },
  {
    id: 3,
    content: 'HTML dùng để làm gì?',
    A: { content: 'Xử lý logic', result: false },
    B: { content: 'Thiết kế giao diện', result: true },
    C: { content: 'Lưu trữ dữ liệu', result: false },
    D: { content: 'Quản lý server', result: false },
  },
  {
    id: 4,
    content: 'CSS có tác dụng chính là gì?',
    A: { content: 'Viết backend', result: false },
    B: { content: 'Kết nối database', result: false },
    C: { content: 'Trang trí giao diện', result: true },
    D: { content: 'Chạy thuật toán', result: false },
  },
  {
    id: 5,
    content: 'React là gì?',
    A: { content: 'Framework backend', result: false },
    B: { content: 'Thư viện UI', result: true },
    C: { content: 'Ngôn ngữ lập trình', result: false },
    D: { content: 'Database', result: false },
  },
  {
    id: 6,
    content: 'HTTP là gì?',
    A: { content: 'Giao thức truyền dữ liệu', result: true },
    B: { content: 'Ngôn ngữ lập trình', result: false },
    C: { content: 'Hệ điều hành', result: false },
    D: { content: 'Trình duyệt', result: false },
  },
  {
    id: 7,
    content: 'LocalStorage dùng để làm gì?',
    A: { content: 'Lưu data tạm trên server', result: false },
    B: { content: 'Lưu data vĩnh viễn trên trình duyệt', result: true },
    C: { content: 'Lưu cache backend', result: false },
    D: { content: 'Quản lý session server', result: false },
  },
  {
    id: 8,
    content: 'API là viết tắt của?',
    A: { content: 'Application Programming Interface', result: true },
    B: { content: 'Advanced Programming Internet', result: false },
    C: { content: 'Application Process Index', result: false },
    D: { content: 'Applied Program Interface', result: false },
  },
  {
    id: 9,
    content: 'Git dùng để làm gì?',
    A: { content: 'Thiết kế UI', result: false },
    B: { content: 'Quản lý mã nguồn', result: true },
    C: { content: 'Deploy server', result: false },
    D: { content: 'Viết database', result: false },
  },
  {
    id: 10,
    content: 'Frontend là gì?',
    A: { content: 'Phần xử lý server', result: false },
    B: { content: 'Phần giao diện người dùng', result: true },
    C: { content: 'Cơ sở dữ liệu', result: false },
    D: { content: 'Hệ điều hành', result: false },
  },
]


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
        {
            if (answer == 'A' && ques.A.result) return true 
            if (answer == 'B' && ques.B.result) return true 
            if (answer == 'C' && ques.C.result) return true 
            if (answer == 'D' && ques.D.result) return true 
        }
        return false 
    }
    static attemptQuiz() 
    {
        let res = [] 
        for (const ques of QUESTIONS) res.push(ques.id) 
        return res 
    }
}