package com.example.fragments

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var fragmentA = FragmentA()
        var fragmentB = FragmentB()

        supportFragmentManager.beginTransaction().apply {
            replace(R.id.fagementView, fragmentA);
            commit()
        }

        btnFragmentA.setOnClickListener{
            supportFragmentManager.beginTransaction().apply {
                replace(R.id.fagementView, fragmentA);
                addToBackStack(null)
                commit()
            }
        }

        btnFragmentB.setOnClickListener{
            supportFragmentManager.beginTransaction().apply {
                replace(R.id.fagementView, fragmentB);
                addToBackStack(null)
                commit()
            }
        }




    }
}