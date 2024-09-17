"use client";
import React from 'react';
import Form from '../form/form';
import Table from '../table/table';
import { useSelector } from 'react-redux';
import {State} from "../../store/types";


const Part1en: React.FC = () => {
  const language: string = useSelector((state: State) => state.language);

  return (
    <>
      <div className="container">
        {language === 'en' && (
          <div className="together">
            <hr className="line" />
            <h1 className="title">Part 1</h1>
          </div>
        )}

        {language === 'ar' && (
          <div className="together" dir="rtl">
            <hr className="line" dir="rtl" />
            <h1 className="title" dir="rtl">
              الجزء رقم 1
            </h1>
          </div>
        )}

        {language === 'en' && (
          <p>
            Utilize the provided Strapi API from the assessment to post user data into your Redux store. You are required to add one user into the &apos;users&apos; collection and display this data in a table using a GET request. Ensure the implementation of Redux for state management, including both POST requests for adding a user and GET requests for displaying data in the table.
          </p>
        )}

        {language === 'ar' && (
          <p dir="rtl" lang='ar'>
           استخدم واجهة برمجة تطبيقات Strapi المقدمة من التقييم لنشر بيانات المستخدم في متجر Redux الخاص بك. يجب عليك إضافة مستخدم واحد إلى مجموعة &quot;المستخدمين&quot; وعرض هذه البيانات في جدول باستخدام طلب GET. تأكد من تنفيذ Redux لإدارة الحالة، بما في ذلك طلبات POST الإضافة مستخدم وطلبات GET لعرض البيانات في الجدول.
          </p>
        )}

        {language === 'en' && (
          <div className="together">
            <Form />
            <Table />
          </div>
        )}

        {language === 'ar' && (
          <div className="together">
            <Table />
            <Form />
          </div>
        )}
      </div>
    </>
  );
};

export default Part1en;