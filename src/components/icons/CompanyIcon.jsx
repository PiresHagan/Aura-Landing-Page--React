const CompanyIcon = ({
  width = 41,
  height = 33,
  fill = '#F4A261',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 33"
      fill={fill}
      className={className}
    >
      <path
        d="M36.834 0.33252H4.16732C1.91536 0.33252 0.0839844 1.94074 0.0839844 3.9183V29.0188C0.0839844 30.9964 1.91536 32.6046 4.16732 32.6046H36.834C39.0859 32.6046 40.9173 30.9964 40.9173 29.0188V3.9183C40.9173 1.94074 39.0859 0.33252 36.834 0.33252ZM4.16732 29.0188V3.9183H18.459V29.0188H4.16732ZM22.5423 29.0188V3.9183H36.834L36.836 29.0188H22.5423Z"
      />
      <path
        d="M26.625 7.50415H32.75V11.0899H26.625V7.50415ZM26.625 14.6757H32.75V18.2615H26.625V14.6757Z"
      />
    </svg>
  );
};

export default CompanyIcon;
