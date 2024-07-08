const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://siga.usm.cl/pag/sistinsc/insc_horario_per_detalle.jsp';

const scrapeSchedule = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const schedule = [];

    $('tr[bgcolor="#FFFFFF"]').each((i, row) => {
      const blocks = $(row).find('td');
      const daySchedule = [];

      blocks.each((j, block) => {
        const blockData = $(block).find('td[onmouseover]').map((_, elem) => {
          const info = $(elem).attr('onmouseover').match(/Consulta\((.*?)\);/);
          if (info) {
            const [sede, jornada, dia, bloque, nombre, seccion, profesor, tipo, sala, estado] = eval(`[${info[1]}]`);
            return { sede, jornada, dia, bloque, nombre, seccion, profesor, tipo, sala, estado };
          }
          return null;
        }).get();

        if (blockData.length > 0) {
          daySchedule.push(blockData);
        }
      });

      if (daySchedule.length > 0) {
        schedule.push(daySchedule);
      }
    });

    return schedule;
  } catch (error) {
    console.error('Error scraping schedule:', error);
  }
};

scrapeSchedule().then(schedule => {
  console.log(schedule);
});
