const generateImage = () => {
  const customerName = document.getElementById("customerName").value;
  console.log(customerName);
  let gender;
  if($('input[name="gender"]:checked').val() == 'male'){
    gender = 'anh'
  } else {
    gender = 'chị'
  }
  console.log(gender)
  const stringHtml = `
    <div class="container">
        <div class="main-box">
            <div class="brand">
                <p class="brand-title">Amir, Uy tín đặt lên hàng đầu!</p>
            </div>
            <br />
            <p class="title">Thư cảm ơn</p>
            <br />
            <p>Kính gửi ${gender} ${customerName},</p>
            <br />
            <p>
            Lời đầu tiên xin được thay mặt toàn bộ đội ngũ nhân viên gửi lời cảm
            ơn chân thành và sâu sắc nhất tới ${gender} ${customerName} đã đồng hành, hợp tác
            cũng như ủng hộ cửa hàng trong thời gian qua.
            </p>
            <br>
            <p>Để đáp lại sự ủng hộ của Quý khách hàng, cửa hàng xin gửi tặng miễn phí voucher giảm giá 20% trên tổng giá trị đơn hàng khi mua hàng vào lần tới.</p>
            <br>
            <p>
            Chính những sự yêu mến và niềm tin của ${gender} ${customerName} là niềm tự hào
            và thành công lớn nhất của chúng em, đồng thời cũng là động lực để
            chúng em tiếp tục phát triển trong tương lai.
            </p>
            <br>
            <p>
            Hy vọng trong thời gian sắp tới, mối quan hệ của hai bên càng lúc càng
            bên chặt. Chúng em sẽ không ngừng phát triển, nâng cao chất lượng
            dịch vụ để có thể phục vụ Quý khách hàng tốt hơn.
            </p>
            <br>
            <p>
            Một lần nữa, chúng em xin gửi lời cảm ơn chân thành và sự tri ân sâu
            sắc tới ${gender} ${customerName}. Xin chúc ${gender} sức khỏe luôn dồi dào, hạnh phục
            và thành công.
            </p>
            <br>
            <p>Trân Trọng!</p>
        </div>
    </div>
`;
  document.getElementById("root").insertAdjacentHTML("beforeend", stringHtml);
  var node = document.getElementById("root");
  htmlToImage
    .toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
      document.getElementById("root").innerHTML = "";
    })
    .catch(function (error) {
      console.error("oops, something wents wrong!", error);
    });
};
