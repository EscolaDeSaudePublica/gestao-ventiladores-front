import React from 'react';
import DadosEquipamento from "./DadosEquipamento";
import "./print.css";
import TabelaAcessoriso from "./TabelaAcessoriso";
import QuadroDiagnosticos from "./QuadroDiagnostico";
import CheckBoxDiagnostic from './CheckBoxDiagnostic'
import Cabecalho from "./Cabecalho";
import SubtituloPagina from "./SubtituloPagina";
import Rodape from "./Rodape";


export default function OsPrint (props) {
  const [csvData] = React.useState(props.location.state.selecionados)

  return (
    <div className={'page-container'}>
      {
        csvData.map((data, index) =>
          <div key={index}>
            <div className={'page'}>
              <div className={'page-content'}>
                <Cabecalho pagina="01" subtitle={'triagem do equipamento'} numero={data['número_da_ordem_de_serviço']} datahora={data['carimbo_de_data/hora']}></Cabecalho>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="1. Cadastro de Equipamento"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'border-black'}>
                  <DadosEquipamento equipamento={data}/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="2. Relação de Material / Acessórios Entregues"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <TabelaAcessoriso equipamento={data}/>
              </div>
              <div className={'page-content'}>
                <Rodape numero={data['número_da_ordem_de_serviço']} pagina={'01'}/>
              </div>
            </div>


            <div className={'page'}>
              <div className={'page-content'}>
                <Cabecalho pagina="02" subtitle={'diagnóstico do equipamento'} numero={data['número_da_ordem_de_serviço']} datahora={data['carimbo_de_data/hora']}></Cabecalho>
              </div>
              {/* <div className={'page-content'}>
                <TituloPagina titulo="DIAGNÓSTICO DO EQUIPAMENTO"></TituloPagina>
              </div> */}
              <div className={'page-content'}>
                <SubtituloPagina texto="1. Classificação do ventilador"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <CheckBoxDiagnostic />
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="2. Resultado do Diagnóstico Clínico"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="3. Acessório que necessita"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="4. Diagnóstico Técnico"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="5. Demanda por Insumos"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="6. Demanda por Serviços"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content'}>
                <Rodape numero={data['número_da_ordem_de_serviço']} pagina={'02'}/>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}