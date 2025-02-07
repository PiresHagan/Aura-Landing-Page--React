const CreditCardIcon = ({ width = 26, height = 20, fill='#65676B' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 20"
      fill={fill}
    >
      <path
        d="M17.375 15C19.1009 15 20.5 13.6009 20.5 11.875C20.5 10.1491 19.1009 8.75 17.375 8.75C15.6491 8.75 14.25 10.1491 14.25 11.875C14.25 13.6009 15.6491 15 17.375 15Z"
        fill={fill}
      />
      <path
        d="M13 11.875C13 10.8563 13.495 9.96 14.25 9.39C13.7123 8.97649 13.0533 8.75157 12.375 8.75C11.5462 8.75 10.7513 9.07924 10.1653 9.66529C9.57924 10.2513 9.25 11.0462 9.25 11.875C9.25 12.7038 9.57924 13.4987 10.1653 14.0847C10.7513 14.6708 11.5462 15 12.375 15C13.0533 14.9984 13.7123 14.7735 14.25 14.36C13.8629 14.0714 13.5484 13.6965 13.3314 13.2652C13.1144 12.8338 13.001 12.3578 13 11.875Z"
        fill={fill}
      />
      <path
        d="M23 0H3C1.62125 0 0.5 1.12125 0.5 2.5V17.5C0.5 18.8788 1.62125 20 3 20H23C24.3788 20 25.5 18.8788 25.5 17.5V2.5C25.5 1.12125 24.3788 0 23 0ZM3 17.5V2.5H23L23.0025 17.5H3Z"
        fill={fill}
      />
    </svg>
  );
};

export default CreditCardIcon;
