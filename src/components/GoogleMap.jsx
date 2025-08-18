export default function GoogleMap() {
  const address = "Buenos Aires, Argentina"

  return (
    <div className="shadow-xl overflow-hidden">
      <div className="w-full h-96 overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.8800037597864!2d-57.61021326349909!3d-38.006057964142535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8d27e09751f%3A0xf2485dfdb73a4ad0!2sAzopardo%20%26%20Av.%20Pres.%20Per%C3%B3n%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1755540702481!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Black Vinos & Bebidas"
        ></iframe>
      </div>
    </div>
  )
}