import { React, useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { MainSection } from "./MainSection";
import { LearningSection } from "./LearningsSection";
import { MoreInfoSection } from "./moreInfoSection";
import { CopyrightSection } from "./copyrightSection";
import axios from "axios";

export const Landing = () => {
  const [data, setData] = useState([]);
  const [whatsapp, setWhatsapp] = useState("");
  const { id, lang } = useParams();
  const navigate = useNavigate();
  const [pageId, setPageId] = useState("");

  const getData = async () => {
    try {
      const { data } = await api.get();
      //console.log("data", data);
      const sections = data.result.find((item) => item._id === pageId).content;
      sections.forEach((element) => {
        element.whatsapp = whatsapp;
      });

      //console.log("data", data);
      setData(sections);
    } catch (error) {
      console.log("error", error);
    }
  };

  const validarURL = (cadena) => {
    if (!/^https?:\/\//i.test(cadena)) {
      cadena = "http://" + cadena;
    }
    return cadena;
  };

  const validateId = async () => {
    try {
      const { data } = await axios.get(
        `https://mmgenerator-api-production.up.railway.app/${id}`,
        {
          headers: {
            "Content-Type": "text/json",
          },
        }
      );
      console.log("data callback", data);
      if (data.statusCode === 200) {
        setWhatsapp(validarURL(data.whatsapp || ""));
      } else {
        navigate("/");
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    switch (lang) {
      case "es":
        setPageId("da59f881-f087-47b2-8e22-dc7c0b070981");
        break;
      case "en":
        setPageId("3578220f-1eb9-47b7-ba7a-6eacc6ebe5fd");
        break;
      case "pt":
        setPageId("6fe309db-4f44-48ce-8d20-9165313915ae");
        break;
      default:
        setPageId("da59f881-f087-47b2-8e22-dc7c0b070981");
        break;
    }
    validateId().then((value) => {
      if (value) {
        getData();
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line
  }, [whatsapp]);

  return (
    <>
      {data.map((section) => (
        <div key={section._key}>
          {section.sectionType === "main" ? (
            <MainSection key={section._key} section={section} />
          ) : null}
          {section.sectionType === "learnings" ? (
            <LearningSection key={section._key} section={section} />
          ) : null}
          {section.sectionType === "moreInfo" ? (
            <MoreInfoSection key={section._key} section={section} />
          ) : null}
          {section.sectionType === "copyright" ? (
            <CopyrightSection key={section._key} section={section} />
          ) : null}
        </div>
      ))}
    </>
  );
};
