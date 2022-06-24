package com.example.todolistapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_main.*


class MainActivity : AppCompatActivity() {

    lateinit var todoAdapter : TodoAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Recycler View
        todoAdapter = TodoAdapter(mutableListOf())
        todoItemsList.adapter = todoAdapter
        todoItemsList.layoutManager = LinearLayoutManager(this)

        btnAdd.setOnClickListener{
            val enteredItem = textInputEditText.text.toString()
            if(enteredItem.isNotEmpty()) {
                var todo = ToDo(enteredItem);
                todoAdapter.insertTodo(todo)
            }
        }

        btnClear.setOnClickListener {
            todoAdapter.clearTodos()
        }
    }
}