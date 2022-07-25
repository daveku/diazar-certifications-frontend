import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import docsService from "../Services/DocumentsService";

import {
  Container,
  Paper,
  Chip,
  Grid,
  Divider,
  Typography,
} from "@mui/material";

const PersonCard = ({ ID }) => {
  const [DOCUMENT, setDocument] = useState({});
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [expeditionDate, setExpeditionDate] = useState("");
  const [existDoc, setExistDoc] = useState(false);

  const dateFormat = (date) => {
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const anio = date.getFullYear();
    const hora = date.getHours();
    const minutos = date.getMinutes();
    setExpeditionDate(
      `${dia} de ${mes} del ${anio} a las ${hora}:${minutos} horas`
    );
  };

  const getDocument = async () => {
    const doc = await docsService.getDocument(ID);
    if (doc.exists) {
      setDocument(doc.data);
      setName(doc.data.user.toUpperCase());
      setType(doc.data.type.toUpperCase());
      dateFormat(new Date(doc.data.expeditionDate));
    }
    setExistDoc(doc.exists);
  };

  useEffect(() => {
    getDocument();

    return () => {
      setDocument({});
      setName("");
      setType("");
      setExpeditionDate("");
      setExistDoc(false);
    };
  }, []);

  return (
    <Container maxWidth="md" sx={{ paddingTop: 5, marginBottom: 5 }}>
      {existDoc ? (
        <Paper
          elevation={20}
          sx={{
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 4,
            paddingRight: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" color="primary">
            Soluciones Integrales y Tecnología Empresarial S.A. de C.V.
          </Typography>
          <Typography variant="h6" component="div" color="primary">
            Otorga {DOCUMENT.type === "Constancia" ? "la" : "el"} presente
          </Typography>
          <Typography
            variant="h2"
            component="div"
            mt={3}
            color="primary"
            bg-Color="secondary"
          >
            {type}
          </Typography>
          <Typography variant="h6" component="div" mb={1} color="primary">
            a
          </Typography>
          <Typography variant="h4" component="div" mb={3} color="primary">
            {name}
          </Typography>
          <Divider />
          {DOCUMENT.type === "Constancia" ? (
            <>
              <Container maxWidth="sm">
                <Typography variant="subtitle1" mt={3} color="primary">
                  Por su asistencia y participación en el curso de capacitación
                  del sistema DiazarControl.
                  {DOCUMENT.company
                    ? " Realizado en la empresa " + DOCUMENT.company + ", c"
                    : " C"}
                  on una duración de {DOCUMENT.duration} horas.
                </Typography>
              </Container>
              <Typography variant="subtitle2" mt={3} mb={2} color="primary">
                Los módulos contemplados en el curso son los siguientes:
              </Typography>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {DOCUMENT.modules.map((module) => {
                  return (
                    <Grid item key={module}>
                      <Chip
                        key={module}
                        label={module}
                        color="secondary"
                        spacing={1}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </>
          ) : (
            <Typography
              variant="subtitle2"
              mt={2}
              mb={2}
              Bottom
              component="div"
              color="primary"
            >
              Por haber concluido un curso del sistema DiazarControl con
              duración de {DOCUMENT.duration} horas.
            </Typography>
          )}
          <Typography variant="caption" component="div" mt={2} color="primary">
            Fecha de expedición: {expeditionDate}
          </Typography>
          <Typography variant="caption" component="div" mb={3} color="primary">
            Con folio de registro: {ID}
          </Typography>
          <Divider />
          <Typography variant="caption" component="div" mt={1}>
            <a
              color="primary"
              href={DOCUMENT.pdfFile}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none", color: "#ff3d00" }}
            >
              Clic aquí para descargar en formato PDF
            </a>
          </Typography>
        </Paper>
      ) : (
        <>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Lo sentimos
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            No encontramos ningún registro
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            Con el ID: {ID}
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
            <Link to="/validate">Intentar de nuevo</Link>
          </Typography>
        </>
      )}
    </Container>
  );
};

export default PersonCard;
