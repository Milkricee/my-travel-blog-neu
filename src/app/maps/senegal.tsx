"use client";

export default function SenegalRoute() {
  return (
    <div id="route" style={{ height: "500px", width: "100%" }}>
      <iframe
        src="https://www.google.de/maps/dir/Dakar,+Senegal/AUBERGE+KHADY,+107+Saly+niakh+niakhal,+Saly,+Senegal/@14.5258661,-16.8775202,10z/data=!4m13!4m12!1m5!1m1!1s0xec172f5b3c5bb71:0xb17c17d92d5db21f!2m2!1d-17.4676861!2d14.716677!1m5!1m1!1s0xec18bcd68700f1b:0x5b3407f2d9d9dbe3!2m2!1d-17.0023468!2d14.4352998?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
