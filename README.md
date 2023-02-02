# NodeMicroService
This is A simple Node Microservice with 2 services, communicating over rabbitMQ.

There's a channel called "rabbit" that service 1 broadcasts on and on where service 2 listens on.

THE GOAL
1. send something form servivce1 to service2

A FEW THINGS TO CONSIDER

1. I have docker running on my local machine where i use to call the services. You have to spin up a docker container by executing the command "docker run --name rabbitmq -p 5672:5672 rabbitmq"
2. Ensure The routing key: Ensure that both service 1 and service 2 are using the same routing key, i.e., "rabbit" in this case.

3. Network connectivity: Ensure that both services are on the same network and can communicate with each other.

4. Queue configuration: Ensure that the queue "rabbit" is properly declared and configured in both services.

5. Message durability: If you want the message to persist even if the RabbitMQ server crashes, you need to make sure the queue is declared as durable. This is optional

Port configuration: Ensure that both services are running on different but correct ports and that there are no firewalls blocking the communication between the two services.
