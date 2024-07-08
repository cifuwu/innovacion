import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://docs.google.com/forms/d/e/1FAIpQLSd7U2ltw-3ZRB46UYyXOr1PO1X-C3m5y1fzbTmUXeoXCgyQWA/viewform');
    const html = response.data;

    const $ = cheerio.load(html);

    const valores = [];
    
    const divContent = $('div[data-value="Eliminar Reserva"]').siblings();
    divContent.each((index, element) => {
      const valor = $(element).attr('data-value');
      valores.push(valor);
    });

    const bloques = valores.filter(item => item && item.includes("Bloque"))

    res.status(200).json({ bloques });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the form page' });
  }
}
