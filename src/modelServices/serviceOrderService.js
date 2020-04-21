import api from "../services/api";
import {ServiceOrder} from "../models/serviceOrder";

/**
 * Seach screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export function getServiceOrderByStatus (status) {
  return api.post(
     '/api/ordem_servicos/find',
    {
      query: {
        status
      }
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function getAllServiceOrder () {
  return api.get(
    '/api/ordem_servicos',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function mapModelRequest(equipment) {
  const model = ServiceOrder({});
  for (let field in model) {
    model[field] = equipment[field]
  }
  return model
}

export function saveNewOrderService (serviceOrder) {
  delete (serviceOrder['_id']);
  const model = mapModelRequest(serviceOrder)
  return api.post(
    '/api/ordem_servicos',
    Object.assign(
      model,
      {
        status: 'triagem',
        created_at: new Date(),
        updated_at: new Date()
      },
    ),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}

export function updateServiceOrderRequest (serviceOrder) {
  delete (serviceOrder['_id']);
  const model = mapModelRequest(serviceOrder)

  return api.post(
    '/api/ordem_servicos',
    Object.assign({}, model, {updated_at: new Date()})
  ).then(result => {
    console.log(result);
    return result;
  }).catch(err => {
    console.log(err);
    return err;
  });
}