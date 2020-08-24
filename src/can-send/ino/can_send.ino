  
// demo: CAN-BUS Shield, send data
//Com 8
#include <mcp_can.h>
#include <SPI.h>

// the cs pin of the version after v1.1 is default to D9
// v0.9b and v1.0 is default D10
const int SPI_CS_PIN = 10;

const int Button = 2;

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    pinMode(Button,INPUT);
    Serial.begin(115200);

    while (CAN_OK != CAN.begin(CAN_500KBPS))              // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS Shield init fail");
        Serial.println(" Init CAN BUS Shield again");
        delay(100);
    }
    Serial.println("CAN BUS Shield init ok!");
}

unsigned char a[8] = {1,1,0,0,0,0,0,0};
unsigned char b[8] = {2,1,0,0,0,0,0,0};
unsigned char c[8] = {3,0,0,0,0,0,0,0};
unsigned char d[8] = {4,0,0,0,0,0,0,0};


void loop()
{   Serial.println("In loop");
    // send data:  id = 0x00, standard frame, data len = 8, stmp: data buf
    
      CAN.sendMsgBuf(0x60,0, 8, a);
      delay(100);
      CAN.sendMsgBuf(0x60,0, 8, b);
      delay(100);
      CAN.sendMsgBuf(0x60,0, 8, c);
      delay(100);
      CAN.sendMsgBuf(0x70,0, 8, a);
      delay(100);
      CAN.sendMsgBuf(0x70,0, 8, b);
      delay(100);
      CAN.sendMsgBuf(0x70,0, 8, d);
      delay(100);
      CAN.sendMsgBuf(0x70,0, 8, a);
      delay(100);
      CAN.sendMsgBuf(0x70,0, 8, a);
      delay(100);
      CAN.sendMsgBuf(0x50,0, 8, d);
      delay(100);
      CAN.sendMsgBuf(0x50,0, 8, a);
      delay(100);
      CAN.sendMsgBuf(0x50,0, 8, a);
      delay(100);
       CAN.sendMsgBuf(0x10,0, 8, d);
      delay(100);
      CAN.sendMsgBuf(0x10,0, 8, a);
      delay(100);
      CAN.sendMsgBuf(0x10,0, 8, a);
      delay(100);
      CAN.sendMsgBuf(0x00,0, 8, d);
      delay(100);
      CAN.sendMsgBuf(0x00,0, 8, a);
      delay(100);
      CAN.sendMsgBuf(0x00,0, 8, a);
      delay(100);
}
