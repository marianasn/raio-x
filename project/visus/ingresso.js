var yourV1Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "Quantidade de ingressantes no curso ao longo dos períodos",
  "width": 700,
  "height": 200,
  "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/ingresso.csv"},
  "mark": {"type":"bar", "tooltip": true},
  "encoding": {
    "x": {
      "field": "periodo_ingresso",
      "type": "ordinal",
      "title": "Periodo do ingresso"
    },
    "y": {
      "field": "contagem", 
      "aggregate": "sum",
      "title": "Quantidade de alunos(as)"
    },
    "color": {
      "field": "sexo",
      "type": "nominal",
      "scale": {
        "domain": ["Feminino", "Masculino"],
        "range": ["#e7ba52", "#1f77b4"]
      },
      "title": "Sexo"
    }
  }
  };
  vegaEmbed("#vis1", yourV1Spec);
  