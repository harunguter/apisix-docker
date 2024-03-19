let requestId = 100000000;

const serviceBuilder = (service, port) => {
  require('express')()
    .get(`/api/${service}s`, (req, res) => {
      res
        .json({
          requestId: requestId++,
          success: true,
          data: require('./databases')[`${service}s`],
        });
    })
    .listen(port, () => console.log(`service://${service}s:${port}`));
};

let port = 5000;

['order', 'product', 'shipping', 'user']
  .map((service) => serviceBuilder(service, port++));
