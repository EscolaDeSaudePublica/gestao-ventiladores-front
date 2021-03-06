import client from './client';

describe('Client', () => {
  it('Should Access-Control-Allow-Origin is present in client header', () => {
    const header = { 'Access-Control-Allow-Origin': '*' };
    expect(client.defaults.headers).toMatchObject(header);
  });

  it('Should Content-Type is present in client header', () => {
    const header = { 'Content-Type': 'application/json' };
    expect(client.defaults.headers).toMatchObject(header);
  });
});
