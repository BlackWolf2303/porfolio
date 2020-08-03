import Link from 'next/link'
import Layout from './layout/layout'

const Index = () => (
  <Layout id="about">
    <section className="section">
      <div className="container content">
        <div className="row d-flex flex-column inner inner-about">
          <div className="col">
            <h1 className="page-title">About me</h1>
            <div className="row intro-myself">
                <div className="col-md-2 align-self-center">
                  <div className="avatar">
                    <img
                    className="avatar-img img-fluid"
                      src="/static/avatar4.jpg"
                      alt="Avatar"
                    />
                    <div className="name">Hai, Ho Thanh</div>
                  </div>
                </div>
                <div className="col-md-10 px-0 px-sm-3 desc">
                  <p>Hi, I'm Hai!</p>
                  <p>I'm a front end developer based in Saigon, VN.</p><br/>

                  <p>Intrigued by the technology, coding, learning, gaming, traveling, fabulous food, music and the minimalism.</p>

                  <p>Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>

                  <p>I am just a normal IT guy, who believe success is achieved by ordinary people with extraordinary determination.</p>
                </div>
            </div>
            <Link href="/work">
              <button className="continue-button" >Continue to my Work</button>
            </Link>
          </div>
        {/*<h1>Để giỏi một việc gì đó trong đời</h1>
        <p>
          Việc phải làm chính là “dành thời gian”
          cho nó. Nói theo một cách khác, là cắt bỏ vài năm cuộc đời của mình, để
          cống hiến bản thân cho việc ấy. Bạn sẽ phải dành thời gian để tìm hiểu về
          nó, trực tiếp trải nghiệm nó bằng tất cả giác quan của mình. Luyện tập để
          xây dựng những ký ức trong cơ bắp, những đường tắt trong tư duy cho đến
          ngày có thể kiểm soát bản thân sâu đến mức có thể làm được nó với tốc độ
          chóng mặt không sai sót.</p>
        <p>Lựa chọn khó khăn với mỗi người cũng chính là chấp nhận cắt bỏ một phần cuộc đời để đầu tư cho một kỹ năng nào đó. Sở thích có thể giúp bạn đi được những bước đầu tiên thật trơn tru, giống như câu nói “Chọn thứ mình đam mê rồi bạn sẽ chẳng phải đi làm dù chỉ một ngày trong đời”. Nhưng thật sự, đến một giai đoạn khi chạm ngưỡng, rồi ai cũng sẽ phải nhận ra rằng để phát triển tiếp, mình sẽ phải làm một thứ gì đó mình không thích, thậm chí là phải vượt qua được giới hạn của vòng tròn an toàn trong chuyện “thích” hay “không thích” để cống hiến cuộc đời mình cho việc ấy.</p>

        <p>Chính vì không phải ai cũng dám hy sinh, không phải ai cũng muốn từ bỏ những cuộc vui ngoài xã hội, hoặc đơn giản nhất là đi ngược lại cảm giác thoải mái của bản thân… nên số đông mới ít khi có được điều mình muốn. Thậm chí, vì cảm giác “dễ chịu” nhất thời, đến một ngày họ sẽ từ bỏ cả ước mơ.
        </p>
        <p className="author">Sưu tầm</p> */}

        </div>
      </div>

      {/* <div className="bg-cover"></div> */}
      
    </section>
  </Layout>
);
export default Index;

