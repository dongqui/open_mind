export function ThumbUpIcon({ isActive }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon/thumbs-up">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.87641 1.13018C6.95666 0.949619 7.13572 0.833252 7.33331 0.833252C7.99635 0.833252 8.63224 1.09664 9.10108 1.56549C9.56992 2.03433 9.83331 2.67021 9.83331 3.33325V5.49992H13.104C13.3688 5.49736 13.6309 5.55216 13.8724 5.66057C14.1149 5.76939 14.3308 5.92962 14.5052 6.13017C14.6796 6.33072 14.8083 6.56679 14.8824 6.82201C14.9565 7.07724 14.9742 7.34553 14.9343 7.60828L14.0143 13.6082C14.0143 13.6083 14.0143 13.6082 14.0143 13.6082C13.948 14.0453 13.7259 14.4439 13.3891 14.7302C13.0529 15.0159 12.6251 15.1708 12.184 15.1666H2.66665C2.18042 15.1666 1.7141 14.9734 1.37028 14.6296C1.02647 14.2858 0.833313 13.8195 0.833313 13.3333V8.66659C0.833313 8.18036 1.02647 7.71404 1.37028 7.37022C1.7141 7.02641 2.18042 6.83325 2.66665 6.83325H4.34171L6.87641 1.13018ZM5.16665 7.43936L7.64381 1.86573C7.92583 1.92541 8.18703 2.06564 8.39397 2.27259C8.67528 2.5539 8.83331 2.93543 8.83331 3.33325V5.99992C8.83331 6.27606 9.05717 6.49992 9.33331 6.49992H13.1066L13.1123 6.49989C13.2331 6.49852 13.3528 6.52343 13.463 6.57289C13.5732 6.62236 13.6713 6.69519 13.7506 6.78635C13.8299 6.87751 13.8884 6.98481 13.922 7.10082C13.9557 7.21676 13.9638 7.33863 13.9457 7.45799C13.9457 7.45806 13.9457 7.45791 13.9457 7.45799L13.0256 13.4583C12.9955 13.657 12.8946 13.8381 12.7414 13.9683C12.5883 14.0985 12.3933 14.1689 12.1923 14.1666L5.16665 14.1666V7.43936ZM4.16665 14.1666V7.83325H2.66665C2.44563 7.83325 2.23367 7.92105 2.07739 8.07733C1.92111 8.23361 1.83331 8.44557 1.83331 8.66659V13.3333C1.83331 13.5543 1.92111 13.7662 2.07739 13.9225C2.23367 14.0788 2.44563 14.1666 2.66665 14.1666H4.16665Z"
          fill={isActive ? '#1877F2' : '#818181'}
        />
      </g>
    </svg>
  );
}

export function ThumbDownIcon({ isActive }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon/thumbs-down">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.818 2.08386C13.6246 1.91787 13.377 1.82866 13.1222 1.83317L13.1134 1.83333L11.8334 1.83325V8.16658H13.1222C13.377 8.17109 13.6246 8.08196 13.818 7.91597C14.0036 7.75659 14.1269 7.53708 14.1667 7.29628V2.70355C14.1269 2.46276 14.0036 2.24324 13.818 2.08386ZM10.8334 8.56047L8.35619 14.1341C8.07417 14.0744 7.81297 13.9342 7.60603 13.7272C7.32472 13.4459 7.16669 13.0644 7.16669 12.6666V9.99992C7.16669 9.72377 6.94283 9.49992 6.66669 9.49992H2.89335L2.88769 9.49995C2.7669 9.50132 2.64725 9.4764 2.53704 9.42694C2.42683 9.37747 2.32869 9.30464 2.24942 9.21348C2.17015 9.12232 2.11165 9.01502 2.07797 8.89901C2.04432 8.78311 2.03625 8.66128 2.05431 8.54195C2.05429 8.54207 2.05432 8.54184 2.05431 8.54195L2.97437 2.54155C3.0045 2.34284 3.10544 2.16171 3.25857 2.03155C3.41171 1.90138 3.60673 1.83094 3.8077 1.83322L10.8334 1.83325V8.56047ZM13.1092 0.833249C13.6074 0.825593 14.0912 1.0005 14.4693 1.32506C14.8486 1.65065 15.0952 2.10418 15.1622 2.59956C15.1652 2.62177 15.1667 2.64417 15.1667 2.66658V7.33325C15.1667 7.35566 15.1652 7.37806 15.1622 7.40027C15.0952 7.89565 14.8486 8.34918 14.4693 8.67477C14.0912 8.99933 13.6074 9.17424 13.1092 9.16658H11.6583L9.12359 14.8697C9.04334 15.0502 8.86428 15.1666 8.66669 15.1666C8.00365 15.1666 7.36776 14.9032 6.89892 14.4343C6.43008 13.9655 6.16669 13.3296 6.16669 12.6666V10.4999H2.89599C2.63127 10.5025 2.36912 10.4477 2.12757 10.3393C1.88511 10.2304 1.6692 10.0702 1.49481 9.86966C1.32042 9.66911 1.19172 9.43305 1.11762 9.17782C1.04352 8.92259 1.0258 8.65431 1.06568 8.39155L1.98567 2.39161C1.98565 2.39176 1.98569 2.39147 1.98567 2.39161C2.05205 1.95462 2.27414 1.55588 2.61093 1.26961C2.94705 0.983901 3.3749 0.828996 3.81596 0.833249H13.1092Z"
          fill={isActive ? '#1877F2' : '#818181'}
        />
      </g>
    </svg>
  );
}