import React, { useState } from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  Typography, 
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBotCard from './boris';
import AirflowCard from './airflow';
import CloudMigrationCard from './gcp';
import TerraformCard from './terraform';
import InsideSalesCard from './metaflow';
import SpeechToTextCard from './spachtext';
import TableauDashboardCard from './tableau';
import SpotfireDashboardCard from './spotfire';
import ChurnModelCard from './modelo';


const ExperienceTab = () => {
  const [activeJob, setActiveJob] = useState(0);

  const experiences = [
    {
      title: "Desenvolvedor Full Stack Senior",
      company: "Callink",
      period: "Jan 2022 - Atual",
      description: [
        {"name": "Metaflow (Desafio Atual)", "desc": <InsideSalesCard/>},
        {"name": "Implantação do Terraform", "desc": <TerraformCard/>},
        {"name": "Migração para o Gcp", "desc": <CloudMigrationCard/>},
        {"name": "Implantação do Apache Airflow", "desc": <AirflowCard/>},
        {"name": "Desenvolvimento de um ´ChatBot(Boris-Ray) 2019-2024´", "desc": <ChatBotCard/>},
      ]
    },
    {
      title: "Estágio / Cientista de dados",
      company: "Roma Consulting",
      period: "Jan 2019 - Jun 2022",
      description: [
        {"name": "Modelo de Churning de clientes", "desc": <ChurnModelCard/>},
        {"name": "Dashboads em Spotfire e uso de IronPython", "desc": <SpotfireDashboardCard/>},
        {"name": "Dashboard usando Tableau", "desc": <TableauDashboardCard/>},
        {"name": "Desenvolvimento de Projeto Speach to text", "desc": <SpeechToTextCard/>}
      ]
    }
  ];

  const handleChange = (event, newValue) => {
    setActiveJob(newValue);
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', my: 4, borderRadius: 20 }}>
      <Typography variant="h4" gutterBottom>
        Experiências Profissionais
      </Typography>
      
      <Paper elevation={3} sx={{ p: 2 }}>
        {/* Abas de navegação */}
        <Tabs
          value={activeJob}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
            {experiences.map((exp, index) => (
                <Tab label={exp.company} key={index} />

            ))}
        </Tabs>

        {/* Conteúdo da experiência */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" component="h3">
            {experiences[activeJob].title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {experiences[activeJob].company}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {experiences[activeJob].period}
          </Typography>
            <div>
                {experiences[activeJob].description.map((item, index) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">{item["name"]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {item["desc"]}
                    </AccordionDetails>
                </Accordion>
                ))}
            </div>
        </Box>
      </Paper>
    </Box>
  );
};

export default ExperienceTab;