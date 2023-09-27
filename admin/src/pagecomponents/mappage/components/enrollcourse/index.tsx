import Button from '../../../../components/button';

const EnrollCourse = (props: any) => {
  return (
    <div>
      <div style={{ height: '77vh', overflowY: 'auto', overflowX: 'hidden', paddingRight: '7px' }}>
        <div></div>
      </div>
      {props.show && (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', paddingTop: '15px' }}>
          <div style={{ width: '120px', height: '45px' }}>
            <Button ismain="false" label={'삭제하기'} />
          </div>
          <div style={{ width: '120px', height: '45px' }}>
            <Button ismain="true" label={'저장하기'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollCourse;
