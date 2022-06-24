package com.example.todolistapp

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.todoitem.view.*
import java.io.IOException
import java.lang.Exception

class TodoAdapter (
    val todoItems: MutableList<ToDo>
        ): RecyclerView.Adapter<TodoAdapter.TodoViewHolder>(){

    class TodoViewHolder(todoView: View) : RecyclerView.ViewHolder(todoView)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TodoViewHolder {
        return TodoViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.todoitem, parent, false))
    }

    override fun onBindViewHolder(holder: TodoViewHolder, position: Int) {
        try {
            val currentTodo = todoItems[position];
            holder.itemView.apply {
                itemcheckBox.isChecked = currentTodo.blnIsChecked;
                itemText.text = currentTodo.strTtem;
                itemcheckBox.setOnCheckedChangeListener { e, isChecked ->
                    currentTodo.blnIsChecked = isChecked;
                }
            }
        }
        catch (ex : Exception)
        {
        }
    }

    override fun getItemCount(): Int {
        return todoItems.size
    }

    fun insertTodo(todo: ToDo){
        todoItems.add(todo)
        notifyItemInserted(todoItems.size -1)
    }

    fun clearTodos(){
        todoItems.removeAll{ todo -> todo.blnIsChecked}
        notifyDataSetChanged()
    }
}