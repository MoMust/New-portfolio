function Box({ icon, skill1, skill2, skill3, skill4, skill5, header }) {
  return (
    <div class="box col-lg-12 col-md-12">
      <div className="box-header">
        {icon}
        <p>{header}</p>
      </div>
      
        <div className="box-content pt-1">
          <div className="box-content-fa ">
            {skill1}
            
          </div>
          <div className="box-content-fa">            
            {skill2}
          </div>
          <div className="box-content-fa">
            {skill3}
          </div>
          <div className="box-content-fa">
            {skill4}
            
          </div>
          <div className="box-content-fa">
            {skill5}
            
          </div>
        </div>
      
    </div>
  );
}

export default Box;
