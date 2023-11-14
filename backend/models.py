from sqlalchemy import  Column,Integer,String, Boolean, ForeignKey
from database import Base
from sqlalchemy.orm import relationship

class User_info(Base):
    __tablename__ = 'user_info'
    idx = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    pw = Column(String)
    email_id = Column(String)
    email_key = Column(String)
    

class User_send_log(Base):
    __tablename__ = 'user_send_log'
    idx = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    receiver = Column(String)
    prompt = Column(String)
    result = Column(String)
    num = Column(Integer)

class User_receive_log(Base):
    __tablename__ = 'user_receive_log'
    idx = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    sender = Column(String)
    contents = Column(String)
    summary = Column(String)
    keyword = Column(String)
    em_keyword = Column(String)
    main_keyword = Column(String)
    num = Column(Integer)


