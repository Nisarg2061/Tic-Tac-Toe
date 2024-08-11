FROM golang:latest

WORKDIR .

COPY . . 

RUN go build -o server .

EXPOSE 8080

CMD ["./server"]
